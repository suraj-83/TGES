import React, { useState } from 'react';

function SignUp() {
    const [formData, setFormData] = useState({
        fullname: '',
        gender: '',
        email: '',
        password: '',
        country: '',
        city: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        // Check if the current input field is empty
        if (value.trim() === '') {
            // Disable the next input field
            switch (name) {
                case 'fullname':
                    document.getElementById('gender').disabled = true;
                    break;
                case 'gender':
                    document.getElementById('country').disabled = true;
                    break;
                case 'country':
                    document.getElementById('city').disabled = true;
                    break;
                case 'city':
                    document.getElementById('email').disabled = true;
                    break;
                case 'email':
                    document.getElementById('password').disabled = true;
                    break;
                default:
                    break;
            }
        } else {
            // Enable the next input field
            switch (name) {
                case 'fullname':
                    document.getElementById('gender').disabled = false;
                    break;
                case 'gender':
                    document.getElementById('country').disabled = false;
                    break;
                case 'country':
                    document.getElementById('city').disabled = false;
                    break;
                case 'city':
                    document.getElementById('email').disabled = false;
                    break;
                case 'email':
                    document.getElementById('password').disabled = false;
                    break;
                default:
                    break;
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sign up form submitted:', formData);
        // Here you can add logic to handle form submission, such as API calls
        setFormData({
            fullname: '',
            gender: '',
            email: '',
            password: '',
            country: '',
            city: ''
        });
    };

    return (
        <div className="h-screen w-full flex items-center justify-center">
            <form className=" bg-blue-100 p-5 rounded-lg flex flex-col w-full md:w-1/2 lg:w-1/3 shadow-[0_0_10px_black]" onSubmit={handleSubmit}>
                <h1 className='mb-3 size-18 font-bold ml-[40%] mr-[40%]'>SignUp</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullname">
                        Full Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="fullname"
                        name="fullname"
                        type="text"
                        placeholder="Full Name"
                        value={formData.fullname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                        Gender
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                        disabled={!formData.fullname.trim()}
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                        Country
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        disabled={!formData.gender.trim()}
                    >
                        <option value="">Select Country</option>
                        <option value="India">India</option>
                        {/* Add other countries as needed */}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                        City
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        disabled={!formData.country.trim()}
                    >
                        <option value="">Select City</option>
                        {/* List of cities for India */}
                        <option value="Mumbai">Mumbai</option>
                        <option value="Siwan">Siwan</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Jaipur">Jaipur</option>
                        <option value="Gaya">Gaya</option>
                        <option value="Muzaffarpur">Muzaffarpur</option>
                        <option value="Mirzapur">Mirzapur</option>
                        
                        {/* Add more cities for India */}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={!formData.city.trim()}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        disabled={!formData.email.trim()}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
