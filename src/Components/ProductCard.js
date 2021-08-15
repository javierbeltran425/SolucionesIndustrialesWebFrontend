const ProductCard = ({ name, code, url, maker }) => {
    return(
        <>
            <a href={url} className="flex flex-col flex-wrap w-60 h-20 bg-white justify-around rounded-lg shadow-lg transform hover:scale-105 duration-500 m-5 cursor-pointer">
                <div className="flex flex-row pl-2">
                    <h2 className="font-bold">{name}</h2>
                </div>
                <div>
                    <p className="font-bold pl-2">Codigo: {code}</p>
                </div>
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