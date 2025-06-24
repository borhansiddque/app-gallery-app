import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo.png";
import useTitle from "../hooks/useTitle/useTitle";

const ErrorPage = () => {
  useTitle("AppGallery - 404 Page Not Found");
  return (
    <div className="w-full min-h-screen bg-[#f2f0ff] flex items-center justify-center">
      <div className="w-[50%] bg-[#d5cdff] p-10 rounded-2xl text-center space-y-10">
        <div className="flex items-center justify-center">
          <img src={logo} alt="" />
        </div>
        <h2 className="text-5xl font-bold text-[#5600f5]">
          404 Page Not Found
        </h2>
        <Link to="/">
          {" "}
          <button className="cursor-pointer py-3 px-8 text-lg font-medium rounded-2xl bg-[#4c01d6] text-white">
            Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
