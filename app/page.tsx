"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ProductCard from "./component/ProductCard";
import Sidebar from "./component/Sidebar";

export default function Home() {
    const [data, setData] = useState([]);

    const filteredData = data.filter((el: any) => el.isActive);
    console.log(filteredData);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("/api/shop-list"); // Поставте свій шлях до вашого обробника
                const { result } = await response.json();
                setData(result);
            } catch (error) {
                console.error("Помилка при отриманні даних:", error);
            }
        }

        fetchData();
    }, []);
    console.log(data);
    return (
        <div className="flex flex-col md:flex-row grow-full gap-2 md:gap-3 lg:gap-4 md:h-[calc(100vh_-_140px)]">
            <Sidebar data={data} />
            <div className="flex flex-col items-center h-auto content-between w-full border-2 rounded-lg border-sky-medium text-lg md:text-xl lg:text-3xl text-sky-black font-display bg-sky-50 p-4 overflow-y-scroll">
                {filteredData.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-4 w-full">
                        {filteredData.map((el: any) =>
                            el.products.map((product: any) => (
                                <div key={product.productId}>
                                    <ProductCard product={product} />
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
