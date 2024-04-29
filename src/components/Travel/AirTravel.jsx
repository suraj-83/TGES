import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { airTravel } from '../../redux/slices/travelSlice';

const AirTravel = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    classOfTravel: "",
  })

  const airportOptions = [
    "New Delhi (DEL)", "Mumbai (BOM)", "Bangalore (BLR)", "Hyderabad (HYD)", "Chennai (MAA)", "Kolkata (CCU)", "Goa (GOI)", "Ahmedabad (AMD)", "Jaipur (JAI)", "Lucknow (LKO)", "Pune (PNQ)", "Srinagar (SXR)", "Guwahati (GAU)", "Bhubaneswar (BBI)", "Raipur (RPR)", "New York (JFK)", "Los Angeles (LAX)", "London (LHR)", "Paris (CDG)", "Tokyo (NRT)"
  ]

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.from || !formData.to || !formData.date || !formData.classOfTravel) {
      toast.error("Please fill all the fields");
      return;
    }

    const response = await dispatch(airTravel(formData));
    console.log(response);

    if (response?.payload?.data?.success) {
      navigate("/travel");
    }
  };

  return (
    <div className='w-full flex items-center justify-center min-h-[90vh] '>
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center lg:w-1/3'>
        <h1 className='text-3xl font-bold mb-8 text-center uppercase underline'>Air Travel Form</h1>
        <form className='w-full max-w-lg'>
          <div className='mb-6'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='departure-airport'>
              Departure Airport
            </label>
            <select
              name='from'
              id='from'
              value={formData.from}
              onChange={handleChange}
              className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            >
              <option value=''>Select departure airport</option>
              {airportOptions.map((airport, index) => (
                <option key={index} value={airport}>{airport}</option>
              ))}
            </select>
          </div>
          <div className='mb-6'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='destination-airport'>
              Destination Airport
            </label>
            <select
              name='to'
              id='to'
              value={formData.to}
              onChange={handleChange}
              className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            >
              <option value=''>Select destination airport</option>
              {airportOptions.map((airport, index) => (
                <option key={index} value={airport}>{airport}</option>
              ))}
            </select>
          </div>
          <div className='mb-6'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='flight-date'>
              Date of Travel
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='date'
              name='date'
              type='date'
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className='mb-6'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='class-of-travel'>
              Class of Travel
            </label>
            <select
              name='classOfTravel'
              id='classOfTravel'
              value={formData.classOfTravel}
              onChange={handleChange}
              className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            >
              <option value=''>Select class of travel</option>
              <option value='ECONOMY'>Economy</option>
              <option value='BUSINESS'>Business</option>
              <option value='FIRST'>First</option>
            </select>
          </div>
          <div className='flex items-center justify-center'>
            <button onClick={(e) => handleSubmit(e)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>
              Book Flight Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AirTravel
