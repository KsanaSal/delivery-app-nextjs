"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const router = usePathname();
    console.log(router);
    return (
        <div className="flex items-center justify-center md:justify-start gap-4 w-full h-[50px] md:h-[60px] lg:h-[80px] border-2 rounded-lg border-sky-medium text-lg md:text-xl lg:text-3xl text-sky-black font-display bg-sky-50 p-4">
            <Link
                href={"/"}
                className={`${
                    router === "/"
                        ? "underline underline-offset-8"
                        : "text-sky-medium"
                }`}
            >
                Shop
            </Link>
            <div className="w-[2px] h-7 bg-gray-700"></div>
            <Link
                href={"/shopping-cart"}
                className={`${
                    router === "/shopping-cart"
                        ? "underline underline-offset-8"
                        : "text-sky-medium"
                }`}
            >
                Shopping Cart
            </Link>
        </div>
    );
};
export default Header;
