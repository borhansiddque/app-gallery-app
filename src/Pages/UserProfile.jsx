import React, { useContext } from "react";
import useTitle from "../hooks/useTitle/useTitle";
import { useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  useTitle("AppGallery - My Profile");
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-[#f2f0ff] max-w-md mx-auto mt-10 space-y-5 border border-[#9673ff] rounded-lg">
      <h1 className="text-2xl font-bold text-[#5600f5]">My Profile</h1>
      <div className="flex items-center mt-4 space-x-4">
        <img
          src={
            user?.photoURL ||
            "https://i.ibb.co.com/NgcVbsJ4/icons8-user-100.png"
          }
          alt="profile"
          className="w-24 h-24 rounded-full border object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold">{user?.displayName}</h2>
          <p className="text-gray-600">{user?.email}</p>
        </div>
      </div>
      <button
        onClick={() => navigate("/my-profile/edit-profile")}
        className="mt-4 px-4 py-2 border rounded cursor-pointer border-[#9673ff] bg-white transition"
      >
        ✏️ Edit
      </button>
    </div>
  );
};

export default MyProfile;
