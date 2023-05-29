"use client";
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const Form = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data: any) => {
        console.log(data);

        try {

            const res = await fetch("/api/form-submission", {
                method: "POST",
                body: JSON.stringify(data)
            });

            if (!res.ok) {
                throw new Error("Failed to login")
            };

            console.log("User Logged In!");

        }
        catch (error) {
            console.error("Error: " + error);
        }
    };

    return (
        <div className="bg-zinc-900 text-white h-screen">
            <form
                className="flex flex-col items-center space-y-6 py-20 text-black font-medium"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col">
                    <label className="mb-2 text-white text-lg">Email:</label>
                    <input type="email"
                        className="text-sm p-2 rounded-md w-80"
                        placeholder="Enter Your Email"
                        {...register("email", {
                            required: true,
                            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                        })}
                    />

                    {errors.email && errors.email.type === "required" && (
                        <p className="text-red-500 text-sm py-2">Email Is Required!</p>
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                        <p className="text-red-500 text-sm py-2">RegEx Is Required!</p>
                    )}
                </div>

                <div className="flex flex-col">
                    <label className="mb-2 text-white text-lg">Password:</label>
                    <input type="password"
                        className="text-sm p-2 rounded-md w-80"
                        placeholder="Enter Your Password"
                        {...register("password", {
                            required: true,
                            minLength: 6,
                        })}
                    />

                    {errors.password && errors.password.type === "required" && (
                        <p className="text-red-500 text-sm py-2">Password Is Required!</p>
                    )}
                </div>

                <div className="flex flex-col items-center">
                    <button type="submit" className="bg-white py-2 px-4 text-md font-bold rounded-md mt-2">
                        Submit
                    </button>
                </div>
            </form>

            <Link href="/">
                <h2 className="text-center my-4 text-[22px] text-blue-700 hover:text-white">
                    Go To Back
                </h2>
            </Link>
        </div>
    )
};

export default Form;