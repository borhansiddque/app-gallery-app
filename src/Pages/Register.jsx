import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import useTitle from "../hooks/useTitle/useTitle";
import toast from "react-hot-toast";

const Register = () => {
  useTitle("AppGallery - Register Page");
  const { userRegister, setUser, updateUser, googleLogin } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const regExUppercase = /(?=.*[A-Z])/;
    const regExLowercase = /(?=.*[a-z])/;
    const regExLength = /.{6,}/;
    if (!regExUppercase.test(password)) {
      setError("Password must have at least one uppercase letter (A-Z)");
      return;
    }
    if (!regExLowercase.test(password)) {
      setError("Password must have at least one lowercase letter (a-z)");
      return;
    }
    if (!regExLength.test(password)) {
      setError("Password must be at least 6 characters long");
      return;
    }

    userRegister(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photoUrl })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoUrl });
            navigate("/");
            toast.success("Create Account Successfully");
          })
          .catch((error) => {
            toast.error(error.message);
            setUser(user);
          });
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        toast.success(`Welcome ${user.displayName} | You Login Successfully`);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="lg:w-7/12 xl:w-5/12 mx-auto bg-[#f2f0ff] my-10 p-5 md:p-10 rounded-2xl">
      <h3 className="text-2xl md:text-3xl text-center font-medium text-[#763bff]">
        SignUp for an Account!
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
      <form onSubmit={handleRegister} className="fieldset">
        <div className="space-y-5">
          <div className="">
            <label className="label">Full Name</label>
            <input
              name="name"
              type="text"
              className="input w-full"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="">
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input w-full"
              placeholder="Photo URL"
              required
            />
          </div>
          <div className="">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
              required
            />
          </div>
          <div className="">
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full"
              placeholder="Password"
              required
            />
          </div>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="hover:bg-[#6914ff] cursor-pointer py-1.5 px-5 sm:py-3 sm:px-8 text-lg font-medium rounded bg-[#4c01d6] text-white transition mt-8"
        >
          Register
        </button>
      </form>
      <p className="text-base mt-5 text-center">
        Already Have An Account ?{" "}
        <Link to="/login" className="text-[#4c01d6] font-semibold">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
