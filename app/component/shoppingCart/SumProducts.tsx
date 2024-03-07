import { UserData } from "@/app/models/UserData";
import { useEffect, useState } from "react";

const SumProducts = ({
    totalPrice,
    userData,
}: {
    totalPrice: number;
    userData: UserData;
}) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (
            userData.address.length > 0 &&
            userData.email.length > 0 &&
            userData.name.length > 0 &&
            userData.phone > 0
        ) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [userData]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(userData);
    };

    return (
        <div className="flex flex-row gap-3 items-center justify-end h-auto content-between w-full border-2 rounded-lg border-sky-medium text-lg md:text-xl lg:text-3xl text-sky-black font-display bg-sky-50 py-6 pl-6 pr-20">
            <p>
                Total price: <span>{totalPrice}</span> UAH
            </p>
            <button
                onClick={handleSubmit}
                disabled={!isActive}
                type="button"
                className=" bg-green-light hover:bg-green-medium px-3 py-2 w-[150px] md:w-[200px] text-gray-900 text-[20px] lg:text-[24px] border-2 border-green-dark rounded-2xl ml-8"
            >
                Submit
            </button>
        </div>
    );
};
export default SumProducts;
