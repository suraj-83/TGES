import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getAllUsers } from '../../redux/slices/authSlice';
import { Link, useNavigate } from 'react-router-dom';

function AdminPanel() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [userData, setUserData] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await dispatch(getAllUsers());
                setUserData(response.payload);
            } catch (error) {
                console.error(error);
            }
        };

        if (selectedOption === 'retail') {
            fetchUserData();
        }
    }, [selectedOption]);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className='flex w-full h-screen -m-5'> {/* Set full width and height for the flex container */}
            <div className='min-w-[10%] md:w-[20%] bg-gray-200 flex h-full flex-col justify-start'> {/* Set the width and height of the sidebar */}
                <div className="p-2 text-sm">
                    <ul>
                        <li>
                            <button 
                                onClick={() => handleOptionClick('retail')} 
                                className={` pr-4 pl-1 w-full text-left ${selectedOption === 'retail' ? 'bg-blue-500 text-white' : ''}`}
                                disabled={selectedOption === 'corporate'}
                            >
                                Retail
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => handleOptionClick('corporate')} 
                                className={`pr-4 pl-1 w-full text-left ${selectedOption === 'corporate' ? 'bg-blue-500 text-white' : ''}`}
                                disabled={true}
                            >
                                Corporate
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            {selectedOption === 'retail' && (
                <div className='w-full overflow-y-auto max-h-[80vh] '>
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
                                    <td className='px-6 py-4 whitespace-nowrap text-sm'>{user.fullName}</td>
                                    <td className='px-6 py-4 whitespace-nowrap text-sm'>{user.email}</td>
                                    <td className='px-6 py-4 whitespace-nowrap text-sm'>{user.gender}</td>
                                    <td className='px-6 py-4 whitespace-nowrap text-sm'>{user.country}</td>
                                    <td className='px-6 py-4 whitespace-nowrap text-sm'>{user.city}</td>
                                </tr>
                            )) : (
                                <tr>
                                    <td className="px-6 py-4" colSpan="5">
                                        <h2 className='text-2xl font-bold mt-5'>Results Not Found</h2>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default AdminPanel;
