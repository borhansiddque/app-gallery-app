import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const HomeLayouts = () => {
  return (
    <div>
      <Toaster position="top-right"></Toaster>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto min-h-[calc(100vh-274px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayouts;
