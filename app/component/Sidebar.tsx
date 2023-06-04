"use client";
import { useEffect, useState } from "react";
import ShopCard from "./ShopCard";

const Sidebar = ({
    data,
    onToggleStatus,
}: {
    data: any;
    onToggleStatus: any;
}) => {
    console.log(data);

    return (
        <div className="flex flex-col items-center h-auto content-between w-full sm:w-1/3 border-2 rounded-lg border-sky-medium text-lg md:text-xl lg:text-3xl text-sky-black font-display bg-sky-50 p-4 overflow-y-scroll">
            <h1 className="text-sky-black text-[36px] font-medium md:font-bold mb-5">
                Shops:
            </h1>
            <div className="flex flex-col gap-2 w-full px-4">
                {data.length > 0 &&
                    data.map((el: any) => (
                        <ShopCard
                            key={el.id}
                            shopName={el.title}
                            status={el.isActive}
                            onToggleStatus={() => onToggleStatus(el.id)}
                        />
                    ))}
            </div>
        </div>
    );
};
export default Sidebar;
