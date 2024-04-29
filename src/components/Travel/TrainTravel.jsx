import React, { useState } from 'react'

const TrainTravel = () => {
  // Define state variables for From station, To station, departure date, departure time, and class of travel
  const [fromStation, setFromStation] = useState('')
  const [toStation, setToStation] = useState('')
  const [departureDate, setDepartureDate] = useState('')
  const [classOfTravel, setClassOfTravel] = useState('')

  // Define an array of station options
  const stationOptions = [
    "Mumbai","Delhi","Bangalore","Hyderabad","Ahmedabad","Chennai","Kolkata","Surat","Pune","Jaipur","Lucknow","Kanpur","Nagpur","Indore","Thane","Bhopal","Visakhapatnam","Vadodara","Firozabad","Ludhiana","Rajkot","Agra","Varanasi","Srinagar","Aurangabad","Dhanbad","Amritsar","Udaipur","Maheshtala","Guntur","Bikaner","Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Purnia", "Katihar", "Chhapra", "Bettiah", "Samastipur", "Begusarai", "Motihari", "Saharsa", "Munger", "Siwan", "Madhubani", "Buxar"
    // Add more stations as needed
  ];

  // Define an array of class options
  const classOptions = ["SL", "1AC", "2AC", "3AC"];

  // Function to handle changes in the departure date input
  const handleDateChange = (event) => {
    setDepartureDate(event.target.value)
  };

  // Function to handle changes in the class of travel dropdown
  const handleClassOfTravelChange = (event) => {
    setClassOfTravel(event.target.value)
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-3xl font-bold mb-4'>Train Travel Form</h1>
      <form className='w-full max-w-lg'>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3 mb-6 md:mb-0'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='train-from'>
              From
            </label>
            <select
              value={fromStation}
              onChange={(event) => setFromStation(event.target.value)}
              className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            >
              <option value=''>Select departure station</option>
              {stationOptions.map((station, index) => (
                <option key={index} value={station}>{station}</option>
              ))}
            </select>
          </div>
          <div className='w-full px-3'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='train-to'>
              To
            </label>
            <select
              value={toStation}
              onChange={(event) => setToStation(event.target.value)}
              className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            >
              <option value=''>Select destination station</option>
              {stationOptions.map((station, index) => (
                <option key={index} value={station}>{station}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='mb-6'>
          <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='train-date'>
            Date
          </label>
          <input
            className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='train-date'
            type='date'
            value={departureDate}
            onChange={handleDateChange}
          />
        </div>
        {/* Class of Travel */}
        <div className='mb-6'>
          <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='class-of-travel'>
            Class of Travel
          </label>
          <select
            value={classOfTravel}
            onChange={handleClassOfTravelChange}
            className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
          >
            <option value=''>Select class of travel</option>
            {classOptions.map((classType, index) => (
              <option key={index} value={classType}>{classType}</option>
            ))}
          </select>
        </div>
        <div className='flex items-center justify-between'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>
            Search Trains
          </button>
        </div>
      </form>
    </div>
  );
};

export default TrainTravel
