import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Profile = () => {
    const userData = useSelector((state) => state.auth.data);

  return (
    <div className='bg-blue-100 p-5 rounded-lg flex flex-col w-full md:w-1/2 lg:w-1/3 shadow-[0_0_10px_black]'>
        <h1 className='text-3xl font-bold uppercase underline text-center mb-5'>Profile</h1>
        <p>Name: {userData?.user?.fullName}</p>
        <p>Email: {userData?.user?.email}</p>
        <p>Gender: {userData?.user?.gender}</p>
        <p>Country: {userData?.user?.country}</p>
        <p>City: {userData?.user?.city}</p>
        <div className='flex items-center justify-center gap-5 mt-5'>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                <Link to={'/update'}>
                    Edit Profile
                </Link>
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
                <Link to={'/change-password'}>
                    Change Password
                </Link>
            </button>
        </div>
    </div>
  )
}

export default Profile