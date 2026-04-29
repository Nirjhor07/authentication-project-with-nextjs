"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegForm = async (data) => {
    // console.log(data);
    const { name, Photo_Url, email, password, terms_condition } = data;
    // console.log(name, Photo_Url, email, password, terms_condition);
    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: Photo_Url,
      callbackURL: "/",
    });
    if (error) {
      alert(`${error.message}`);
    }
    if (res) {
      alert("succesfully registered to dragon news portal");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(handleRegForm)}
      className="min-h-screen bg-base-200 flex items-center justify-center px-4"
    >
      <fieldset className="fieldset bg-base-100 border border-base-300  w-full max-w-md p-8 shadow-xl">
        <legend className=" text-3xl font-bold text-center w-full p-3.5 ">
          Register your Account
        </legend>
        {/* name */}
        <label className="label font-semibold">Your Name</label>
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Enter your name"
          {...register("name", { required: true })}
        />
        {errors.name && <span>Please input your name</span>}

        {/* photo url */}
        <label className="label font-semibold mt-2">Photo URL</label>
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Enter photo url"
          {...register("Photo_Url", { required: true })}
        />
        {errors.Photo_Url && <span>Please input your photo url</span>}

        {/* email */}
        <label className="label font-semibold mt-2">Email</label>
        <input
          type="email"
          className="input input-bordered w-full"
          placeholder="Enter your email address"
          {...register("email", { required: true })}
        />
        {errors.email && <span>Email field is required</span>}

        {/* password */}
        <label className="label font-semibold mt-2">Password</label>
        <input
          type="password"
          className="input input-bordered w-full"
          placeholder="Enter your password"
          {...register("password", { required: true })}
        />
        {errors.password && <span>Password field is required</span>}

        {/* Accept terms and condition */}
        <label className="label cursor-pointer justify-start gap-2 mt-3">
          <input
            type="checkbox"
            className="checkbox checkbox-sm"
            {...register("terms_condition", { required: true })}
          />
          <span className="text-sm">Accept Term & Conditions</span>
        </label>
        {errors.terms_condition && (
          <span className="text-red-400">please select tick</span>
        )}

        {/* register btn */}
        <button type="submit" className="btn btn-neutral mt-4 w-full">
          Register
        </button>
      </fieldset>
    </form>
  );
};

export default RegisterPage;
