import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router";
import Loading from "../Components/Loading/Loading";
import toast from "react-hot-toast";

const EditProfile = () => {
  const { user, setUser, loading } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  if (loading) return <Loading></Loading>;

  const handleUpdate = async () => {
    try {
      await updateProfile(user, {
        displayName,
        photoURL,
      });
      await user.reload();
      setUser({ ...user, displayName, photoURL });
      toast.success("Profile Updated");
      navigate("/my-profile");
    } catch (error) {
      toast.error("Error updating profile", error);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto mt-10 bg-[#f2f0ff] border border-[#9673ff] rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-[#5600f5]">Profile</h1>
      <img
        src={photoURL || "https://i.ibb.co.com/NgcVbsJ4/icons8-user-100.png"}
        alt="profile"
        className="w-20 h-20 rounded-full border mb-4 object-cover"
      />
      <input
        className="w-full border p-2 mb-4"
        placeholder="Photo URL"
        value={photoURL}
        onChange={(e) => setPhotoURL(e.target.value)}
      />
      <input
        className="w-full border p-2 mb-4"
        placeholder="Display Name"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />
      <input
        className="w-full border p-2 mb-4 bg-gray-100 cursor-not-allowed opacity-50"
        value={user?.email}
        disabled
      />
      <button
        className="bg-[#6914ff] text-white px-4 py-2 rounded hover:bg-[#4c01d6] cursor-pointer transition"
        onClick={handleUpdate}
      >
        Update Profile
      </button>
    </div>
  );
};

export default EditProfile;
