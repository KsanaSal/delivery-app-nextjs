"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ProductCard from "./component/shop/ProductCard";
import Sidebar from "./component/shop/Sidebar";
import { Shop } from "./models/ShopCards";

export default function Home() {
    const [data, setData] = useState<Shop[]>([]);
    const [isShowAllProd, setIsShowAllProd] = useState(true);
    const [filteredData, setFilteredData] = useState<Shop[]>([]);

    useEffect(() => {
        const isAnyShopActive = data.some((el) => el.isActive);
        setIsShowAllProd(!isAnyShopActive);
    }, [data]);

    useEffect(() => {
        setFilteredData(
            isShowAllProd ? data : data.filter((el) => el.isActive)
        );
    }, [data, isShowAllProd]);

    const toggleShopStatus = (shopId: string) => {
        const updatedData = data.map((shop) => {
            if (shop.isActive) {
                setIsShowAllProd(false);
            }
            if (shop.id === shopId) {
                return {
                    ...shop,
                    isActive: !shop.isActive,
                };
            }
            return shop;
        });

        setData(updatedData);
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("/api/shop-list");
                const { result } = await response.json();
                setData(result);
            } catch (error) {
                console.error("Помилка при отриманні даних:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="flex flex-col md:flex-row grow-full gap-2 md:gap-3 lg:gap-4 md:h-[calc(100vh_-_140px)]">
            <Sidebar data={data} onToggleStatus={toggleShopStatus} />
            <div className="flex flex-col items-center h-auto content-between w-full border-2 rounded-lg border-sky-medium text-lg md:text-xl lg:text-3xl text-sky-black font-display bg-sky-50 p-4 overflow-y-scroll">
                {filteredData.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-4 w-full">
                        {filteredData.map((el) =>
                            el.products.map((product) => (
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
