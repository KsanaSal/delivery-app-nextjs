const UserForm = () => {
    return (
        <div className="flex flex-col items-center h-auto content-between w-full sm:w-1/2 border-2 rounded-lg border-sky-medium text-lg md:text-xl lg:text-3xl text-sky-black font-display bg-sky-50 py-6 pl-6 pr-20">
            <form className="flex flex-col w-full h-full justify-between">
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        placeholder="Write your name"
                    />
                </label>

                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        placeholder="Write your email"
                    />
                </label>

                <label>
                    Phone
                    <input
                        type="number"
                        name="phone"
                        placeholder="Write your phone"
                    />
                </label>

                <label>
                    Address
                    <input
                        type="text"
                        name="address"
                        placeholder="Write your address"
                    />
                </label>
            </form>
        </div>
    );
};

export default UserForm;
