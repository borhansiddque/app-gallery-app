import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import useTitle from "../hooks/useTitle/useTitle";
import toast from "react-hot-toast";

const Login = () => {
  useTitle("AppGallery - Login Page");
  const { userLogin, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        navigate(`${location.state ? location.state : "/"}`);
        toast.success(`You Login Successfully | Welcome ${user.displayName}`);
      })
      .catch((error) => {
        setError(
          "Your Login Information are invalid - Please Check Email or Password"
        );
        toast.error(error.message);
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        navigate(`${location.state ? location.state : "/"}`);
        toast.success(`Welcome ${user.displayName} | You Login Successfully`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="lg:w-7/12 xl:w-5/12 mx-auto bg-[#f2f0ff] my-10 p-10 rounded-2xl">
      <h3 className="text-3xl text-center font-medium text-[#763bff]">
        Please Login to Continue.
      </h3>
      <div className="my-5 flex items-center justify-center">
        <button
          onClick={handleGoogleLogin}
          className="border border-[#d5cdff] rounded cursor-pointer flex items-center justify-center gap-2 bg-white text-black py-3 px-5"
        >
          <FcGoogle size={24} />
          Login with Google
        </button>
      </div>
      <p className="text-lg font-medium text-[#763bff] text-center mb-5">OR</p>
      <form onSubmit={handleLogin} className="fieldset">
        <label className="label">Email</label>
        <input
          name="email"
          type="email"
          className="input w-full active:outline-0"
          placeholder="Email"
          required
        />
        <label className="label">Password</label>
        <input
          name="password"
          type="password"
          className="input w-full"
          placeholder="Password"
          required
        />
        <div>
          <a className="link link-hover">Forgot password?</a>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <button
          type="submit"
          className="hover:bg-[#6914ff] cursor-pointer py-1.5 px-5 sm:py-3 sm:px-8 text-lg font-medium rounded bg-[#4c01d6] text-white transition mt-5"
        >
          Login
        </button>
      </form>
      <p className="text-base mt-5 text-center">
        Don't Have An Account ?{" "}
        <Link to="/register" className="text-[#4c01d6] font-semibold">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
