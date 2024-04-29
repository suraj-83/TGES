import React, { useState } from 'react'

const AirTravel = () => {
  const [departureAirport, setDepartureAirport] = useState('')
  const [destinationAirport, setDestinationAirport] = useState('')
  const [flightDate, setFlightDate] = useState('')
  const [classOfTravel, setClassOfTravel] = useState('')

  const airportOptions = [
    "New Delhi (DEL)", "Mumbai (BOM)", "Bangalore (BLR)", "Hyderabad (HYD)", "Chennai (MAA)", "Kolkata (CCU)", "Goa (GOI)", "Ahmedabad (AMD)", "Jaipur (JAI)", "Lucknow (LKO)", "Pune (PNQ)", "Srinagar (SXR)", "Guwahati (GAU)", "Bhubaneswar (BBI)", "Raipur (RPR)", "New York (JFK)", "Los Angeles (LAX)", "London (LHR)", "Paris (CDG)", "Tokyo (NRT)"
  ]

  const handleDepartureChange = (event) => {
    setDepartureAirport(event.target.value)
  }

  const handleDestinationChange = (event) => {
    setDestinationAirport(event.target.value)
  }

  const handleDateChange = (event) => {
    setFlightDate(event.target.value)
  }

  const handleClassOfTravelChange = (event) => {
    setClassOfTravel(event.target.value)
  }

  return (
    <div className='flex items-center justify-center min-h-[90vh]'>
      <div className='w-full max-w-lg'>
        <h1 className='text-3xl font-bold mb-8'>Air Travel Form</h1>
        <form>
          <div className='mb-6'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='departure-airport'>
              Departure Airport
            </label>
            <select
              value={departureAirport}
              onChange={handleDepartureChange}
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
              value={destinationAirport}
              onChange={handleDestinationChange}
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
              id='flight-date'
              type='date'
              value={flightDate}
              onChange={handleDateChange}
            />
          </div>
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
              <option value='ECONOMY'>Economy</option>
              <option value='BUSINESS'>Business</option>
              <option value='FIRST'>First</option>
            </select>
          </div>
          <div className='flex items-center justify-center'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>
              Search Flights
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AirTravel
