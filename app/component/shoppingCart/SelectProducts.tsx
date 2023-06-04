"use client";
import { useEffect, useState } from "react";
import SelectCard from "./SelectCard";

const SelectProducts = () => {
    const [cardProduct, setCardProduct] = useState<any[]>([]);

    useEffect(() => {
        const selectedProducts = localStorage.getItem("selectedProducts");
        const parsedSelectedProducts = selectedProducts
            ? JSON.parse(selectedProducts)
            : [];
        setCardProduct(parsedSelectedProducts);
        console.log(parsedSelectedProducts);
    }, []);

    return (
        <div className="flex flex-col gap-3 items-center h-auto content-between w-full border-2 rounded-lg border-sky-medium text-lg md:text-xl lg:text-3xl text-sky-black font-display bg-sky-50 py-6 pl-6 pr-20 overflow-y-scroll">
            {cardProduct.length > 0 &&
                cardProduct.map((el: any) => (
                    <SelectCard product={el} key={el.productId} />
                ))}
        </div>
    );
};

export default SelectProducts;
