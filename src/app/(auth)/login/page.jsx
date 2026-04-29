"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleFormFunction = (data) => {
    // console.log(data);
    const { email, password } = data;
    // console.log(email, password);
  };
  // THIS WATCH FIELD IS IMPORTANT FOR CONTROLLED VALIDATION
  // console.log(watch("email"));
  return (
    <form
      onSubmit={handleSubmit(handleFormFunction)}
      className="min-h-screen bg-base-200 flex items-center justify-center px-4"
    >
      <fieldset className="fieldset bg-base-100 border border-base-300  w-full max-w-md p-8 shadow-xl">
        <legend className="text-2xl font-bold text-center w-full pb-6">
          Login your account
        </legend>

        {/* email */}
        <input
          type="email"
          className="input input-bordered w-full mb-4"
          placeholder="Enter your email address"
          {...register("email", { required: true })}
        />
        {errors.email && <span>Email field is required</span>}

        {/* password */}
        <input
          type="password"
          className="input input-bordered w-full mb-6"
          placeholder="Enter your password"
          {...register("password", { required: true })}
        />
        {errors.password && <span>Password field is required</span>}

        <button type="submit" className="btn btn-neutral mt-6 w-full">
          Login
        </button>

        <p className="text-center mt-4 text-sm flex items-center justify-center gap-1">
          Do not Have An Account?
          <Link
            href="/register"
            className="text-red-500 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </fieldset>
    </form>
  );
};

export default LoginPage;
