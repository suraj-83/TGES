import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createAccount } from "../redux/slices/authSlice";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signupDetails, setSignupDetails] = useState({
    fullName: "",
    gender: "",
    email: "",
    password: "",
    country: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !signupDetails.fullName ||
      !signupDetails.email ||
      !signupDetails.password ||
      !signupDetails.gender ||
      !signupDetails.country ||
      !signupDetails.city
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    const response = await dispatch(createAccount(signupDetails));
    console.log(response);

    if (response?.payload?.data?.success) {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-[90vh] w-full flex items-center justify-center py-10">
      <form
        className="bg-blue-100 p-5 rounded-lg flex flex-col w-full md:w-1/2 lg:w-1/3 shadow-[0_0_10px_black]"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-3 font-bold text-center uppercase text-2xl underline">
          SignUp
        </h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={signupDetails.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="gender"
          >
            Gender
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="gender"
            name="gender"
            value={signupDetails.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="country"
          >
            Country
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="country"
            name="country"
            value={signupDetails.country}
            onChange={handleChange}
            required
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            {/* Add other countries as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="city"
          >
            City
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            name="city"
            value={signupDetails.city}
            onChange={handleChange}
            required
          >
            <option value="">Select City</option>
            {/* List of cities for India */}
            <option value="Mumbai">Mumbai</option>
            <option value="Siwan">Siwan</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chennai">Chennai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Gaya">Gaya</option>
            <option value="Muzaffarpur">Muzaffarpur</option>
            <option value="Mirzapur">Mirzapur</option>

            {/* Add more cities for India */}
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={signupDetails.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={signupDetails.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
        <p className="text-center pt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
