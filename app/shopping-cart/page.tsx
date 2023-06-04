import UserForm from "../component/shoppingCart/UserForm";
import SelectProducts from "../component/shoppingCart/SelectProducts";
import SumProducts from "../component/shoppingCart/SumProducts";

export default function Home() {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row grow-full gap-2 md:gap-3 lg:gap-4 md:h-[calc(100vh_-_360px)]">
                <UserForm />
                <SelectProducts />
            </div>
            <SumProducts />
        </div>
    );
}
