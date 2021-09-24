const BrandCard = ({ img, title, text }) => {
    return(
        <>
            <div className="flex flex-col items-center md:w-40 h-44 bg-white rounded-md mx-2 my-2 md:my-0 overflow-y-auto">
                <img src={img} className="p-1"/>
                <h1 className="text-sm py-3 px-2 font-extrabold">
                    {title}
                </h1>
                <p className="text-sm px-2 font-semibold">
                    {text}
                </p>
            </div>
        </>
    )
}

export default BrandCard