// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AdminLogin from './components/Admin'; // Import the AdminLogin component
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <nav className="bg-blue-800 p-4">
          <ul className="flex items-center justify-end">
            <div className="md:mr-[77%] lg:mr-[88%]">
              <img src="https://www.tgestravel.com/assets/images/logo/tges-logo.png" alt="logo" className="h-8" />
            </div>
            <li className="mr-6">
              <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
            </li>
            <li>
              <Link to="/signup" className="text-white hover:text-gray-300">Sign Up</Link>
            </li>
          </ul>
        </nav>

        <div className="flex-grow flex justify-center items-center">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/admin" element={<Admin />} /> {/* Add this route for AdminLogin */}
            <Route path="/adminpanel" element={<AdminPanel />} /> {/* Add this route for AdminPanel */} 
          </Routes>
        </div>         
      </div>
    </Router>
  );
}

export default App;
