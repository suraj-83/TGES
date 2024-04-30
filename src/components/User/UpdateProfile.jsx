import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "../../redux/slices/authSlice";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let form = new FormData(e.target);
    let formData = Object.fromEntries(form.entries());

    const response = await dispatch(updateProfile(formData));

    if (response?.payload?.success) {
      navigate("/profile");
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="bg-blue-100 p-5 rounded-lg flex flex-col w-full md:w-1/2 lg:w-1/2 shadow-[0_0_10px_black]">
        <h1 className="text-3xl font-bold uppercase underline text-center mb-5">
          Edit Profile
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10">
            <div>
              <div className="mb-2">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-bold mb-2"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter full name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="gender"
                  className="block text-sm font-bold mb-2"
                >
                  Gender
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="gender"
                  name="gender"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="country"
                  className="block text-sm font-bold mb-2"
                >
                  Country
                </label>
                <input
                  id="country"
                  type="text"
                  name="country"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter country"
                  required
                />
              </div>
            </div>
            <div>
              <div className="mb-4">
                <label htmlFor="city" className="block text-sm font-bold mb-2">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter city"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-bold mb-2">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  pattern="[0-9]{10}"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-bold mb-2"
                >
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter address"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update Profile
            </button>
          </div>
          <p className="text-center mt-5">
            <Link
              to={"/profile"}
              className="text-blue-500 hover:text-blue-700 hover:underline"
            >
              Go back to profile
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
