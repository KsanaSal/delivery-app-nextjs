import Image from "next/image";
import ProductCard from "./component/ProductCard";

export default function Home() {
    return (
        <div className="flex flex-col items-center h-auto content-between w-full border-2 rounded-lg border-sky-medium text-lg md:text-xl lg:text-3xl text-sky-black font-display bg-sky-50 p-4">
            <ProductCard />
        </div>
    );
}
