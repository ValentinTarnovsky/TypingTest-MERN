import { useForm } from "react-hook-form";
import { useAuth } from "../context/useAuth";

const SignupPage = () => {
    const { register, handleSubmit } = useForm();
    const { signup, user } = useAuth();

    console.log(user);

    const handleOnSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-zinc-800 max-w-md p-10 rounded-md">
                <h1 className="text-3xl font-bold text-center mb-4">Signup Page</h1>
                <form
                    onSubmit={handleOnSubmit}>
                    <input
                        type="text"
                        {...register("username", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md border-white border-1 mb-4"
                        placeholder="Username"/>
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md border-white border-1 mb-4"
                        placeholder="Email"/>
                    <input
                        type="password"
                        {...register("password", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md border-white border-1 mb-4"
                        placeholder="Password"/>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                Signup
                    </button>
                </form>
            </div>
        </div>

    );
};

export default SignupPage;