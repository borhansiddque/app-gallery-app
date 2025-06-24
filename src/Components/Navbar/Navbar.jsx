import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import { FiMenu } from "react-icons/fi";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        toast.success("You LogOut Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `${isActive ? "text-[#b8a6ff] underline" : "text-[#f2f0ff]"}`
          }
        >
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            `${isActive ? "text-[#b8a6ff] underline" : "text-[#f2f0ff]"}`
          }
        >
          About us
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/exclusive-content"}
          className={({ isActive }) =>
            `${isActive ? "text-[#b8a6ff] underline" : "text-[#f2f0ff]"}`
          }
        >
          Exclusive Content
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            `${isActive ? "text-[#b8a6ff] underline" : "text-[#f2f0ff]"}`
          }
        >
          Contact
        </NavLink>
      </li>
      {user && (
        <li className="">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-[#b8a6ff] underline" : "text-[#f2f0ff]"}`
            }
            to="/my-profile"
          >
            My Profile
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className=" bg-[#240077] shadow-sm py-1">
      <div className="navbar flex-col-reverse md:flex-row gap-5 w-11/12 mx-auto">
        <div className="navbar-start items-center justify-center md:items-start md:justify-start w-full sm:w-1/2">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-[#f2f0ff]"
            >
              <FiMenu size={20} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-[#f2f0ff] bg-[#240077] rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal text-lg font-medium gap-5">{links}</ul>
        </div>
        <div className="navbar-end gap-3 items-center justify-center lg:items-start lg:justify-end w-full sm:w-1/2">
          {user ? (
            <div className="flex items-center gap-5 text-[#f2f0ff]">
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <img
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://i.ibb.co.com/NgcVbsJ4/icons8-user-100.png"
                  }
                  alt=""
                  className="h-12 w-12 rounded-full bg-white cursor-pointer object-contain aspect-square"
                />
              </div>
              {/* <h2>{user && user.email}</h2> */}
              <Link to="">
                {" "}
                <button
                  onClick={handleLogOut}
                  className="hover:bg-red-500 cursor-pointer py-1.5 px-5 md:py-3 md:px-8 text-lg font-medium rounded bg-red-600 text-white transition"
                >
                  LogOut
                </button>
              </Link>
            </div>
          ) : (
            <Link to="/login">
              {" "}
              <button className="hover:bg-[#4c01d6] cursor-pointer py-1.5 px-5 sm:py-2 sm:px-8 text-lg font-medium rounded bg-[#6914ff] text-white transition">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
