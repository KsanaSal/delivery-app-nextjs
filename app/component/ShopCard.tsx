const ShopCard = ({ shopName }: { shopName: string }) => {
    return (
        <div>
            <button
                type="button"
                className=" bg-green-medium p-5 text-gray-900 text-[20px] lg:text-[24px] font-bold border-2 border-green-dark rounded-lg w-full"
            >
                {shopName}
            </button>
        </div>
    );
};
export default ShopCard;
