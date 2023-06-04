import Image from "next/image";

const SelectCard = ({ product }: { product: any }) => {
    return (
        <div className="flex flex-row items-center justify-between bg-white border-2 rounded-xl border-sky-black p-3 text-gray-500 w-full min-h-[350px]">
            <Image
                src={product.productImage}
                alt={product.productName}
                width={300}
                height={100}
                className="h-full"
                sizes="100% 70px"
            />
            <div className="flex flex-col gap-2 items-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-sky-black">
                    {product.productName}
                </h2>
                <h3 className="text-base md:text-lg">{product.title}</h3>
                <p className="text-lg md:text-2xl text-gray-700">
                    Price:{" "}
                    <span className="text-sky-black">
                        {product.productPrice}
                    </span>{" "}
                    UAH
                </p>
                <input
                    type="number"
                    name="weight"
                    min="0"
                    max="50"
                    step="1"
                    defaultValue="1"
                />
            </div>
        </div>
    );
};
export default SelectCard;
