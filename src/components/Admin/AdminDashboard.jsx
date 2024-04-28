import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUsers } from '../../redux/slices/authSlice'

function AdminDashboard() {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.auth.data)

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    // Calculate statistics
    const totalUsers = userData.length;
    const maleUsers = userData.filter(user => user.gender === 'male').length
    const femaleUsers = userData.filter(user => user.gender === 'female').length
    const uniqueCountries = [...new Set(userData.map(user => user.country))]
    const totalCountries = uniqueCountries.length

    return (
        <div>
            <div>
                <h1 className='text-center text-3xl font-bold uppercase underline mb-5'>User Data Analysis</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    <div className='bg-white overflow-hidden shadow rounded-lg'>
                        <div className='px-4 py-5 sm:p-6'>
                            <dl>
                                <dt className='text-sm font-medium text-gray-500 truncate'>Total Users</dt>
                                <dd className='mt-1 text-3xl font-semibold text-gray-900'>{totalUsers}</dd>
                            </dl>
                        </div>
                    </div>
                    <div className='bg-white overflow-hidden shadow rounded-lg'>
                        <div className='px-4 py-5 sm:p-6'>
                            <dl>
                                <dt className='text-sm font-medium text-gray-500 truncate'>Male Users</dt>
                                <dd className='mt-1 text-3xl font-semibold text-gray-900'>{maleUsers}</dd>
                            </dl>
                        </div>
                    </div>
                    <div className='bg-white overflow-hidden shadow rounded-lg'>
                        <div className='px-4 py-5 sm:p-6'>
                            <dl>
                                <dt className='text-sm font-medium text-gray-500 truncate'>Female Users</dt>
                                <dd className='mt-1 text-3xl font-semibold text-gray-900'>{femaleUsers}</dd>
                            </dl>
                        </div>
                    </div>
                    <div className='bg-white overflow-hidden shadow rounded-lg'>
                        <div className='px-4 py-5 sm:p-6'>
                            <dl>
                                <dt className='text-sm font-medium text-gray-500 truncate'>Total Countries</dt>
                                <dd className='mt-1 text-3xl font-semibold text-gray-900'>{totalCountries}</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-center text-3xl font-bold uppercase underline mb-5'>User Data</h1>
                <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                        <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-200'>
                                <thead className='bg-blue-500 sticky top-0 z-10' style={{ backdropFilter: 'saturate(180%) blur(5px)' }}>
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
        </div>
    )
}

export default AdminDashboard
