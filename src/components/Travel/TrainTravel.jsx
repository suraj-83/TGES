import React, { useState } from "react";
import { trainTravel } from "../../redux/slices/travelSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const TrainTravel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    classOfTravel: "",
  })

  // Define an array of station options
  const stationOptions = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Ahmedabad",
    "Chennai",
    "Kolkata",
    "Surat",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Vadodara",
    "Firozabad",
    "Ludhiana",
    "Rajkot",
    "Agra",
    "Varanasi",
    "Srinagar",
    "Aurangabad",
    "Dhanbad",
    "Amritsar",
    "Udaipur",
    "Maheshtala",
    "Guntur",
    "Bikaner",
    "Patna",
    "Gaya",
    "Bhagalpur",
    "Muzaffarpur",
    "Darbhanga",
    "Purnia",
    "Katihar",
    "Chhapra",
    "Bettiah",
    "Samastipur",
    "Begusarai",
    "Motihari",
    "Saharsa",
    "Munger",
    "Siwan",
    "Madhubani",
    "Buxar",
    
  ];

  const classOptions = ["SL", "1AC", "2AC", "3AC"];

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

    const response = await dispatch(trainTravel(formData));
    console.log(response);

    if (response?.payload?.data?.success) {
      navigate("/travel");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4 uppercase underline">
        Train Travel Form
      </h1>
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="train-from"
            >
              From
            </label>
            <select
              value={formData.from}
              name="from"
              id="from"
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            >
              <option value="">Select departure station</option>
              {stationOptions.map((station, index) => (
                <option key={index} value={station}>
                  {station}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="train-to"
            >
              To
            </label>
            <select
            name="to"
            id="to"
              value={formData.to}
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="">Select destination station</option>
              {stationOptions.map((station, index) => (
                <option key={index} value={station}>
                  {station}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="train-date"
          >
            Date
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="date"
              id="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        {/* Class of Travel */}
        <div className="mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="class-of-travel"
          >
            Class of Travel
          </label>
          <select
          name="classOfTravel"
          id="classOfTravel"
            value={formData.classOfTravel}
            onChange={handleChange}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="">Select class of travel</option>
            {classOptions.map((classType, index) => (
              <option key={index} value={classType}>
                {classType}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button onClick={(e) => handleSubmit(e)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Book Train Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

export default TrainTravel;
