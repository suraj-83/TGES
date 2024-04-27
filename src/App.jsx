import React from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <nav className="bg-blue-800 p-4">
          <ul className="flex">
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
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
