import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const UpdateProfile = () => {
  const userData = useSelector((state) => state.auth.data)

  const [fullName, setFullName] = useState(userData?.user?.fullName || '')
  const [email, setEmail] = useState(userData?.user?.email || '')
  const [gender, setGender] = useState(userData?.user?.gender || '')
  const [country, setCountry] = useState(userData?.user?.country || '')
  const [city, setCity] = useState(userData?.user?.city || '')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Profile updated successfully')
  }

  return (
    <div className='bg-blue-100 p-5 rounded-lg flex flex-col w-full md:w-1/2 lg:w-1/3 shadow-[0_0_10px_black]'>
      <h1 className='text-3xl font-bold uppercase underline text-center mb-5'>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='fullName' className='block text-sm font-bold mb-2'>
            Full Name
          </label>
          <input
            id='fullName'
            type='text'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Enter full name'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-sm font-bold mb-2'>
            Email
          </label>
          <input
            id='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Enter email'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='gender' className='block text-sm font-bold mb-2'>
            Gender
          </label>
          <input
            id='gender'
            type='text'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Enter gender'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='country' className='block text-sm font-bold mb-2'>
            Country
          </label>
          <input
            id='country'
            type='text'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Enter country'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='city' className='block text-sm font-bold mb-2'>
            City
          </label>
          <input
            id='city'
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Enter city'
            required
          />
        </div>
        <div className='flex items-center justify-center'>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  )
}

export default UpdateProfile
