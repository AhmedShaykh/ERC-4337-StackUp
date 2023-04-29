"use client";
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

            console.log("User Logged in!");

        }
        catch (error) {
            console.error("Error: " + error);
        }
    };

    return (
        <>
            <form
                className="flex flex-col items-center space-y-6 text-black font-medium"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col">
                    <label className="mb-2 text-white text-md">Email:</label>
                    <input type="email"
                        className="text-sm p-2 rounded-md"
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
                    <label className="mb-2 text-white text-md">Password:</label>
                    <input type="password"
                        className="text-sm p-2 rounded-md"
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
                    <button type="submit" className="bg-white py-2 px-4 text-md font-bold rounded-md">
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
};

export default Form;