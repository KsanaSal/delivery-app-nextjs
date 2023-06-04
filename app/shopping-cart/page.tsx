import Image from "next/image";

import { faker } from "@faker-js/faker";
import UserForm from "../component/shoppingCart/UserForm";
import SelectProducts from "../component/shoppingCart/SelectProducts";
import SumProducts from "../component/shoppingCart/SumProducts";
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

export default function Home() {
    const randomName = faker.person.fullName(); // Rowan Nikolaus
    const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    return (
        <div className="flex flex-col">
            <div className="flex flex-col md:flex-row grow-full gap-2 md:gap-3 lg:gap-4 md:h-[calc(100vh_-_360px)]">
                <UserForm />
                <SelectProducts />
            </div>
            <SumProducts />
        </div>
    );
}
