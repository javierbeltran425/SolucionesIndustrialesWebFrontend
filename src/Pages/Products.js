import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { useAxiosPost } from "../Hooks/useAxiosPost";

import Header from "../Components/Header";
import ProductCard from "../Components/ProductCard";
import Footer from "../Components/Footer";

const Products = () => {
  const [search, setSearch] = useState(null);
  const [page, setPage] = useState(1);
  const [searchContent, setSearchContent] = useState(null);

  var category = localStorage.getItem("category");
  let auxData = {
    category: category,
  };

  let petitionFilter = useAxiosPost(
    process.env.REACT_APP_API_URL + "products/product-category?page=" + page,
    auxData
  );

  let content = null;

  const onChange = async (e) => {
    e.persist();

    await setSearch(e.target.value.toLowerCase());

    filterElements();
  };

  const filterElements = () => {
    var searchE = petitionFilter.response.products.filter((item) => {
      if (
        item.name.toLowerCase().includes(search) ||
        item.productID.toLowerCase().includes(search) ||
        item.maker.toLowerCase().includes(search)
      )
        return item;
    });
    setSearchContent(searchE);
  };

  if (category) {
    if (searchContent == null || search.length < 2) {
      console.log(search);
      if (petitionFilter.response != null) {
        content = petitionFilter.response.products.map((e) => (
          <ProductCard
            name={`${e.name}`}
            code={e.productID}
            url={e.url}
            maker={e.maker}
          />
        ));
      }
    } else {
      content = searchContent.map((e) => (
        <ProductCard
          name={`${e.name}`}
          code={e.productID}
          url={e.url}
          maker={e.maker}
        />
      ));
    }
  }

  return (
    <>
      <Header className="bg-gray-900" />
      <div className="flex flex-col justify-between w-full min-h-screen bg-gray-400">
        <div className="flex flex-row w-full justify-center items-center pt-20">
          <input
            value={search}
            onChange={onChange}
            type="text"
            placeholder="Buscar..."
            className="my-3 border rounded shadow-lg text-gray-600 px-2 focus:border-purple-700 focus:ring-1 focus:ring-purple-700 outline-none w-3/4"
          />
          <Icon icon={faSearch} className="mx-3" />
        </div>

        <div className="flex flex-row flex-wrap justify-center w-full">
          {content}
        </div>

        <div className="bottom-0 w-full text-center">
          <Icon
            icon={faArrowLeft}
            className="mx-20 my-2 hover:scale-110 transform duration-500 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              if (page > 1) {
                setPage(page - 1);
              }
            }}
          />
          <Icon
            icon={faArrowRight}
            className="mx-20 my-2 hover:scale-110 transform duration-500 cursor-pointer"
            onClick={(e) => {
              if (page <= petitionFilter.response.totalPages - 1) {
                setPage(page + 1);
              }
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
