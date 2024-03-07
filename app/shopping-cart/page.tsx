"use client";
import { useEffect, useState } from "react";
import UserForm from "../component/shoppingCart/UserForm";
import SelectProducts from "../component/shoppingCart/SelectProducts";
import SumProducts from "../component/shoppingCart/SumProducts";
import { Product } from "../models/ProductCard";

export default function Home() {
    const [cardProduct, setCardProduct] = useState<Product[]>([]);
    const [totalSum, setTotalSum] = useState(0);
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: 0,
        address: "",
    });

    const updateTotalPrice = () => {
        getSelectedProducts();
    };

    const getSelectedProducts = () => {
        const selectedProducts = localStorage.getItem("selectedProducts");
        const parsedSelectedProducts = selectedProducts
            ? JSON.parse(selectedProducts)
            : [];

        setCardProduct(parsedSelectedProducts);
    };

    useEffect(() => {
        getSelectedProducts();
    }, []);

    useEffect(() => {
        if (cardProduct.length > 0) {
            let localSum = 0;
            cardProduct.forEach((product: Product) => {
                localSum += product.productPrice * product.amount;
            });
            setTotalSum(localSum);
        }
    }, [cardProduct]);

    const updateUserData = (data: any) => {
        // console.log(data);
        setUserData(data);
    };

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row grow-full gap-2 md:gap-3 lg:gap-4 md:h-[calc(100vh_-_360px)]">
                <UserForm updateUserData={updateUserData} />
                <SelectProducts
                    updateTotalPrice={updateTotalPrice}
                    cardProducts={cardProduct}
                />
            </div>
            <SumProducts totalPrice={totalSum} userData={userData} />
        </div>
    );
}
