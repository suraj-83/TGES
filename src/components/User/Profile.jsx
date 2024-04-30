import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const userData = useSelector((state) => state.auth.data);

  return (
  <div className="flex items-center flex-col w-full justify-center min-h-[90vh]">
    <div className="bg-blue-100 p-5 rounded-lg flex flex-col w-full md:w-1/2 lg:w-1/3 shadow-[0_0_10px_black]">
      <h1 className="text-3xl font-bold uppercase underline text-center mb-5">
        Profile
      </h1>
      <div className="grid grid-cols-2 gap-2">
        <p className="font-semibold">Name:</p>
        <p className="font-normal">{userData?.user?.fullName}</p>
        <p className="font-semibold">Email:</p>
        <p className="font-normal">{userData?.user?.email}</p>
        <p className="font-semibold">Gender:</p>
        <p className="font-normal">{userData?.user?.gender}</p>
        <p className="font-semibold">Country:</p>
        <p className="font-normal">{userData?.user?.country}</p>
        <p className="font-semibold">City:</p>
        <p className="font-normal">{userData?.user?.city}</p>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-5">
        <button className="bg-blue-500 text-sm lg:text-base hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
          <Link to={"/update"}>Edit Profile</Link>
        </button>
        <button className="bg-green-500 text-sm lg:text-base shrink-0 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
          <Link to={"/change-password"}>Change Password</Link>
        </button>
      </div>
      <button className="bg-indigo-500 text-sm lg:text-base hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full mt-4">
        <Link to={"/user/travel"}>Travel Details</Link>
      </button>
    </div>
   </div>
  );
};

export default Profile;
