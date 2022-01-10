
const Btn = ({ texto }) => {
    return (
        <div className="flex justify-end mt-10">
            <button
                className="block bg-[#10c210] text-xl rounded text-white py-3 px-10 transition-all ease-in hover:bg-[#0aa50a]"
            >
                {texto}
            </button>
        </div>
    )
}

export default Btn
