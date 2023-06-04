const ButtonProduct = ({ onClick }: { onClick: any }) => {
    return (
        <div>
            <button
                type="button"
                className=" bg-sky-medium px-3 py-2 w-[150px] md:w-[200px] text-gray-900 text-[20px] lg:text-[24px] border-2 border-green-dark rounded-3xl"
                onClick={onClick}
            >
                add to Cart
            </button>
        </div>
    );
};
export default ButtonProduct;
