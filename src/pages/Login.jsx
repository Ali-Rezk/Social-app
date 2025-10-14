import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../lib/login.schceme";
import Feedback from "../components/Feedback";
import { loginFn } from "../apis/login.api";
import { auth } from "../context/auth.context";
import { Helmet } from "react-helmet";

export default function Login() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setIsLogin } = useContext(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data) {
    setLoading(true);
    try {
      const res = await loginFn(data);
      // if (res.message === "success") {
      console.log(res);
      setLoading(false);
      setError("");
      setIsLogin(res.token);
      localStorage.setItem("token", res.token);
      navigate("/home");
      // }
    } catch (error) {
      setLoading(false);
      setError(error.response?.data?.error);
    }
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>Login</title>
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
        <button className="bg-purple btn text-white">
          {loading ? (
            <i className="fa-solid fa-spin fa-spinner text-white"></i>
          ) : (
            "Login"
          )}
        </button>
        <p className="my-5 mb-2">
          Don't have an account? {""}
          <Link to={"/register"} className="text-purple font-bold">
            Register here
          </Link>
        </p>
      </form>
    </>
  );
}
