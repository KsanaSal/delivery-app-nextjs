const ShopCard = ({
    shopName,
    status,
}: {
    shopName: string;
    status: boolean;
}) => {
    return (
        <div>
            <button
                type="button"
                className={`p-5 text-gray-900 text-[20px] lg:text-[24px] font-bold border-2 border-green-dark rounded-lg w-full ${
                    status ? "bg-green-medium" : "bg-red-500"
                }`}
                disabled={!status}
            >
                {shopName}
            </button>
        </div>
    );
};
export default ShopCard;
