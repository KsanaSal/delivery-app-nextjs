"use client";
import { Product } from "@/app/models/ProductCard";
import SelectCard from "./SelectCard";

const SelectProducts = ({
    updateTotalPrice,
    cardProducts,
}: {
    updateTotalPrice: () => void;
    cardProducts: Product[];
}) => {
    return (
        <div className="flex flex-col gap-3 items-center h-auto content-between w-full border-2 rounded-lg border-sky-medium text-lg md:text-xl lg:text-3xl text-sky-black font-display bg-sky-50 py-6 pl-6 pr-20 overflow-y-scroll">
            {cardProducts.length > 0 &&
                cardProducts.map((el: Product) => (
                    <SelectCard
                        product={el}
                        key={el.productId}
                        updateTotalPrice={updateTotalPrice}
                    />
                ))}
        </div>
    );
};

export default SelectProducts;
