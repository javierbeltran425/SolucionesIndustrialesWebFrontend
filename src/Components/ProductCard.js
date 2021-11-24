const ProductCard = ({ name, code, url, maker }) => {
    console.log(url)
    return(
        <>
            <a href={url} className="flex flex-col flex-wrap w-60 h-auto bg-white justify-around rounded-lg shadow-lg transform hover:scale-105 duration-500 m-5 p-2 cursor-pointer">
                <div className="flex flex-row px-2 py-4">
                    <h2 className="font-bold">{name}</h2>
                </div>
                <hr/>
                <div>
                    <p className="pl-2">Codigo: {code}</p>
                </div>
                <hr/>
                <div className="pl-2 text-red-600">
                    <p>
                        Marca: {maker}
                    </p>
                </div>
            </a>
        </>       
    )
}

export default ProductCard