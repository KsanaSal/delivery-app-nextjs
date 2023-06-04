const ShopCard = ({
    shopName,
    status,
    onToggleStatus,
}: {
    shopName: string;
    status: boolean;
    onToggleStatus: any;
}) => {
    const handleClick = () => {
        onToggleStatus();
    };
    return (
        <div>
            <button
                type="button"
                className={`p-5 text-gray-900 text-[20px] lg:text-[24px] font-bold border-2 border-green-dark rounded-lg w-full ${
                    status ? "bg-green-medium" : "bg-green-light"
                }`}
                onClick={handleClick}
            >
                {shopName}
            </button>
        </div>
    );
};
export default ShopCard;
