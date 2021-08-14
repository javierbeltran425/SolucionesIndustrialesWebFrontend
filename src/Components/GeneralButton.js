const GeneralButton = ({ text }) => {
    return(
        <>
            <button className="shadow-md w-5/12 p-1 my-4 bg-red-600 hover:bg-purple-600 font-bold text-white rounded-full duration-1000">
                {text}
            </button>
        </>
    )
}

export default GeneralButton