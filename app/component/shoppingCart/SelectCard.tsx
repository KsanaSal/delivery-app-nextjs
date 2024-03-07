import Image from "next/image";
import { Product } from "@/app/models/ProductCard";

const SelectCard = ({
    product,
    updateTotalPrice,
}: {
    product: Product;
    updateTotalPrice: () => void;
}) => {
    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedProducts = localStorage.getItem("selectedProducts");
        const parsedSelectedProducts = selectedProducts
            ? JSON.parse(selectedProducts)
            : [];
        const updatedProducts = parsedSelectedProducts.map((el: Product) =>
            el.productId === product.productId
                ? {
                      ...el,
                      amount: e.target.value,
                  }
                : el
        );
        localStorage.setItem(
            "selectedProducts",
            JSON.stringify(updatedProducts)
        );
        updateTotalPrice();
    };

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
                <p>
                    Price: <span>{product.productPrice}</span> UAH
                </p>
                <p>
                    Total price:{" "}
                    <span>{product.productPrice * product.amount}</span> UAH
                </p>
                <input
                    className="w-20"
                    type="number"
                    name="weight"
                    min="0"
                    max="50"
                    step="1"
                    defaultValue={product.amount}
                    onChange={handleQuantityChange}
                />
            </div>
        </div>
    );
};
export default SelectCard;
