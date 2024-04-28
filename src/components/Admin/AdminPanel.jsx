import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getAllUsers } from '../../redux/slices/authSlice';

function AdminPanel() {
    const dispatch = useDispatch()

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await dispatch(getAllUsers());
                console.log(response.payload)
                setUserData(response.payload);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div>
            <h1 className='text-center text-3xl font-bold uppercase underline mb-5'>User Data</h1>
            <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
                <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                    <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                        <table className='min-w-full divide-y divide-gray-200'>
                            <thead className='bg-blue-500 sticky top-0 z-10' style={{backdropFilter: 'saturate(180%) blur(5px)'}}>
                                <tr className='font-bold text-white'>
                                    <th className='px-6 py-3 text-left text-sm font-medium sm:hidden md:table-cell'>Full Name</th>
                                    <th className='px-6 py-3 text-left text-sm font-medium sm:hidden md:table-cell'>Email</th>
                                    <th className='px-6 py-3 text-left text-sm font-medium sm:hidden md:table-cell'>Gender</th>
                                    <th className='px-6 py-3 text-left text-sm font-medium sm:hidden md:table-cell'>Country</th>
                                    <th className='px-6 py-3 text-left text-sm font-medium sm:hidden md:table-cell'>City</th>
                                </tr>
                            </thead>
                            <tbody className='bg-white divide-y divide-gray-200'>
                                {userData.map(user => (
                                    <tr key={user.id} className='border-b border-gray-200'>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm sm:hidden md:table-cell'>{user.fullName}</td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm sm:hidden md:table-cell'>{user.email}</td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm sm:hidden md:table-cell'>{user.gender}</td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm sm:hidden md:table-cell'>{user.country}</td>
                                        <td className='px-6 py-4 whitespace-nowrap text-sm sm:hidden md:table-cell'>{user.city}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AdminPanel;
