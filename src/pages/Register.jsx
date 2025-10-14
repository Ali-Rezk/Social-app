import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "../lib/register.scheme";
import Feedback from "../components/Feedback";
import { addUser } from "../apis/register.api";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Register() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      gender: "",
      dateOfBirth: "",
    },
  });

  async function onSubmit(data) {
    setLoading(true);
    try {
      const res = await addUser(data);
      if (res.message === "success") {
        console.log(res);
        setLoading(false);
        setError("");
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      setError(error.response?.data?.error);
    }
  }

  return (
    <>
    <Helmet>
        <title>Register</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <div className="mx-auto py-2 w-1/3">
        {error && <Feedback message={error}></Feedback>}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto shadow shadow-gray-400 p-5"
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            {...register("name")}
            type="text"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
            placeholder=" "
          />
          {errors.name && <Feedback message={errors.name.message}></Feedback>}

          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            {...register("email")}
            type="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
            placeholder=" "
          />
          {errors.email && <Feedback message={errors.email.message}></Feedback>}
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            {...register("password")}
            type="password"
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
            placeholder=" "
          />
          {errors.password && (
            <Feedback message={errors.password.message}></Feedback>
          )}
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            {...register("rePassword")}
            type="password"
            id="rePassword"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
            placeholder=" "
          />
          {errors.rePassword && (
            <Feedback message={errors.rePassword.message}></Feedback>
          )}
          <label
            htmlFor="rePassword"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Re-password
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            {...register("dateOfBirth")}
            type="date"
            id="date"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
            placeholder=" "
          />
          {errors.dateOfBirth && (
            <Feedback message={errors.dateOfBirth.message}></Feedback>
          )}
          <label
            htmlFor="date"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Date of birth
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            {...register("gender")}
            id="male"
            type="radio"
            value="male"
            className="w-4 h-4 text-purple-600 bg-gray-100 accent-purple my-2 border-gray-300 focus:ring-purple-500  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="male"
            className="ms-2 text-sm font-medium dark:text-gray-500"
          >
            Male
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            {...register("gender")}
            id="female"
            type="radio"
            value="female"
            className="w-4 h-4 text-purple-600 bg-gray-100 accent-purple my-2 border-gray-300 focus:ring-purple-500  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="female"
            className="ms-2 text-sm font-medium dark:text-gray-500"
          >
            Female
          </label>
        </div>
        {errors.gender && <Feedback message={errors.gender.message}></Feedback>}
        <button className="bg-purple btn text-white">
          {loading ? (
            <i className="fa-solid fa-spin fa-spinner text-white"></i>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </>
  );
}
