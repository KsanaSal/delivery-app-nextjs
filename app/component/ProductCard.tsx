import Image from "next/image";
import ButtonProduct from "./ButtonProduct";

const ProductCard = () => {
    return (
        <div className="flex flex-col bg-white border-2 rounded-xl border-sky-black p-3 text-gray-500">
            {/* <Image src={} alt="" /> */}
            <div className="flex flex-row gap-2 md:justify-between items-end">
                <div className="flex flex-col gap-1">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-sky-black">
                        Name
                    </h2>
                    <p className="text-lg md:text-2xl lg:text-3xl">
                        Price: <span>123</span>
                    </p>
                </div>
                <ButtonProduct />
            </div>
        </div>
    );
};
export default ProductCard;
