"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Form = () => {

    const router = useRouter();

    const handleSubmit = async (event: any) => {

        event.preventDefault();

        const formData = new FormData(event.target);

        const username = formData.get("username");

        const password = formData.get("password");

        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({ username, password })
        });

        const { accessToken } = await res.json();

        console.log(accessToken);

        if (accessToken) {

            router.push("/");

        } else {

            alert("Login Failed");

        }

    };

    return (
        <div className="bg-zinc-900 text-white h-screen">
            <form
                className="flex flex-col items-center space-y-6 py-20 text-black font-medium"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col">
                    <label className="mb-2 text-white text-lg">
                        Email:
                    </label>

                    <input
                        type="text"
                        name="username"
                        className="text-sm p-2 rounded-md w-80"
                        placeholder="Enter Your Email"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-2 text-white text-lg">
                        Password:
                    </label>

                    <input
                        type="password"
                        name="password"
                        className="text-sm p-2 rounded-md w-80"
                        placeholder="Enter Your Password"
                    />
                </div>

                <div className="flex flex-col items-center">
                    <button type="submit" className="bg-white py-2 px-4 text-md font-bold rounded-md mt-2">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
};

export default Form;