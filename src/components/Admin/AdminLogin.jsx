import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/slices/authSlice";

function AdminLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signinDetails, setSigninDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSigninDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!signinDetails.email || !signinDetails.password) {
      toast.error("Please fill all the fields");
      return;
    }

    const response = await dispatch(login(signinDetails));
    console.log(response);

    if (response?.payload?.data?.success) {
      navigate("/adminpanel");
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="p-5 rounded-lg w-full md:w-1/2 lg:w-1/3 shadow-[0_0_10px_grey]">
        <div className="max-w-md mx-auto ">
          <h2 className="text-2xl font-bold uppercase underline text-center mb-6">
            Admin Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={signinDetails.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={signinDetails.password}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600 w-full"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
