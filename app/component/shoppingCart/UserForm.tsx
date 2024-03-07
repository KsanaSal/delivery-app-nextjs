import { useState } from "react";

const UserForm = ({
    updateUserData,
}: {
    updateUserData: ({
        name,
        email,
        phone,
        address,
    }: {
        name: string;
        email: string;
        phone: number;
        address: string;
    }) => void;
}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);
    const [address, setAddress] = useState("");

    return (
        <div className="flex flex-col items-center h-auto content-between w-full sm:w-1/2 border-2 rounded-lg border-sky-medium text-lg md:text-xl lg:text-3xl text-sky-black font-display bg-sky-50 py-6 pl-6 pr-20">
            <form className="flex flex-col w-full h-full justify-between">
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        placeholder="Write your name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            updateUserData({
                                name,
                                email,
                                phone,
                                address,
                            });
                        }}
                    />
                </label>

                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        placeholder="Write your email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            updateUserData({ name, email, phone, address });
                        }}
                    />
                </label>

                <label>
                    Phone
                    <input
                        type="number"
                        name="phone"
                        placeholder="Write your phone"
                        value={phone}
                        onChange={(e) => {
                            setPhone(
                                isNaN(parseInt(e.target.value))
                                    ? 0
                                    : parseInt(e.target.value)
                            );
                            updateUserData({ name, email, phone, address });
                        }}
                    />
                </label>

                <label>
                    Address
                    <input
                        type="text"
                        name="address"
                        placeholder="Write your address"
                        value={address}
                        onChange={(e) => {
                            setAddress(e.target.value);
                            updateUserData({ name, email, phone, address });
                        }}
                    />
                </label>
            </form>
        </div>
    );
};

export default UserForm;
