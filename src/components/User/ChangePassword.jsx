import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { changePassword } from '../../redux/slices/authSlice';

const ChangePassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const [userInput, setUserInput] = useState({
      oldPassword: "",
      newPassword: "",
    });
  
    async function handleFormSubmit(e) {
      e.preventDefault();
  
      if (!userInput.oldPassword || !userInput.newPassword) {
        toast.error("All Fields are required");
        return;
      }
  
      const response = await dispatch(changePassword(userInput));
  
      if (response?.payload?.success) {
        setUserInput({
          oldPassword: "",
          newPassword: "",
        });
  
        navigate("/profile");
      }
    }

    function handleUserInput(e) {
      const { name, value } = e.target;
  
      setUserInput({
        ...userInput,
        [name]: value,
      });
    }


  return (
    <div className="bg-blue-100 p-5 rounded-lg flex flex-col w-full md:w-1/2 lg:w-1/3 shadow-[0_0_10px_black]">
      <h2 className="text-2xl font-bold mb-4 uppercase underline text-center">Change Password</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="old-password">
            Old Password
          </label>
          <input
            id="oldPassword"
            name='oldPassword'
            type="password"
            value={userInput.oldPassword}
            onChange={handleUserInput}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter old password"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="new-password">
            New Password
          </label>
          <input
            id="newPassword"
            name='newPassword'
            type="password"
            value={userInput.newPassword}
            onChange={handleUserInput}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter new password"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Change Password
          </button>
        </div>
        <p className='text-center mt-5'>
          <Link to={"/profile"} className="text-blue-500 hover:text-blue-700 hover:underline">
            Go back to profile
          </Link>
        </p>
      </form>
    </div>
  )
}

export default ChangePassword
