import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getAllUsers } from '../../redux/slices/authSlice';
import { Link, useNavigate } from 'react-router-dom';

function AdminPanel() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await dispatch(getAllUsers());
                setUserData(response.payload);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className='w-full overflow-y-auto max-h-[80vh]'>
            {/* <h1 className='text-center text-3xl font-bold uppercase underline mb-5 sticky top-0'>User Data</h1> */}
            <table className='min-w-full border-collapse table-auto sm:table-fixed border-gray-200'>
                <thead className='bg-blue-500 text-white font-semibold sticky top-0 z-10' >
                    <tr className='font-extrabold sticky top-0'>
                        <th className='px-6 py-3 text-left text-sm font-medium'>Full Name</th>
                        <th className='px-6 py-3 text-left text-sm font-medium'>Email</th>
                        <th className='px-6 py-3 text-left text-sm font-medium'>Gender</th>
                        <th className='px-6 py-3 text-left text-sm font-medium'>Country</th>
                        <th className='px-6 py-3 text-left text-sm font-medium'>City</th>
                    </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                    {userData && userData.length > 0 ? userData.map(user => (
                        <tr key={user._id} className='border-b border-gray-200 cursor-pointer' onClick={() => navigate(`/admin/user/${user._id}`)}>
                            {/* <p>{JSON.stringify(user)}</p> */}
                            <td className='px-6 py-4 whitespace-nowrap text-sm'>{user.fullName}</td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm'>{user.email}</td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm'>{user.gender}</td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm'>{user.country}</td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm'>{user.city}</td>
                        </tr>
                    )) : (
                        <div className='w-full'>
                            <h2 className='text-2xl font-bold mt-5'>Results Not Found</h2>
                        </div>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default AdminPanel;