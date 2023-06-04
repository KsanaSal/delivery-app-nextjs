import Image from "next/image";
import ButtonProduct from "./ButtonProduct";

const ProductCard = ({ product }: { product: any }) => {
    const handleAddToCart = (prod: any) => {
        console.log(prod);
        // Отримати обрані товари з localStorage або створити новий масив
        const selectedProducts = localStorage.getItem("selectedProducts");
        const parsedSelectedProducts = selectedProducts
            ? JSON.parse(selectedProducts)
            : [];

        console.log(parsedSelectedProducts);
        // Додати поточний товар до масиву обраних товарів
        parsedSelectedProducts.push({ ...product, amount: 1 });

        // Оновити дані у localStorage
        localStorage.setItem(
            "selectedProducts",
            JSON.stringify(parsedSelectedProducts)
        );
    };

    return (
        <div className="flex flex-col items-center justify-between bg-white border-2 rounded-xl border-sky-black p-3 text-gray-500 w-full min-h-[350px] md:w-[450px]">
            <Image
                src={product.productImage}
                alt={product.productName}
                width={300}
                height={100}
                className="h-full mb-4"
                sizes="100% 100px"
            />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-sky-black">
                {product.productName}
            </h2>
            <div className="flex flex-row gap-2 md:justify-between items-end">
                <div className="flex flex-col gap-1">
                    <h3 className="text-base md:text-lg">{product.title}</h3>
                    <p>
                        Price: <span>{product.productPrice}</span> UAH
                    </p>
                </div>
                <ButtonProduct onClick={() => handleAddToCart(product)} />
            </div>
        </div>
    );
};
export default ProductCard;
