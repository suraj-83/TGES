import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/User/Login";
import SignUp from "./components/User/SignUp";
import AdminLogin from "./components/Admin/AdminLogin"; // Import the AdminLogin component
import AdminPanel from "./components/Admin/AdminPanel";
import AdminDashboard from "./components/Admin/AdminDashboard";
import RequireAuth from "./components/Auth/RequireAuth";
import Denied from "./components/Denied";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./redux/slices/authSlice";
import Home from "./components/Home";
import Travel from "./components/Travel/Travel";
import TrainTravel from "./components/Travel/TrainTravel";
import AirTravel from "./components/Travel/AirTravel";
import Profile from "./components/User/Profile";
import UpdateProfile from "./components/User/UpdateProfile";
import ChangePassword from "./components/User/ChangePassword";
import UserDetails from "./components/Admin/UserDetails";
import TravelDetails from "./components/User/TravelDetails";

function App() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  const role = useSelector((state) => state?.auth?.role);

  async function handleLogOut(e) {
    e.preventDefault();

    const response = await dispatch(logout());

    if (response?.payload?.data?.success) {
      window.location.href = "/";
    }
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <nav className="bg-blue-800 p-4 min-h-[10vh]">
          <ul className="flex items-center justify-between">
            <Link to="/">
              <img
                src="https://www.tgestravel.com/assets/images/logo/tges-logo.png"
                alt="logo"
                className="h-16"
              />
            </Link>
            <div className="flex items-center mr-5 font-semibold">
              {isLoggedIn ? (
                <div className="flex gap-4">
                  {role === "ADMIN" && (
                    <Link to={"/adminpanel"}>
                      <button className="text-base text-white font-semibold hover:text-blue-100 hover:underline rounded-full">
                        Admin
                      </button>
                    </Link>
                  )}
                  {role === "USER" && (
                    <Link to={"/travel"}>
                      <button className="text-base text-white font-semibold hover:text-blue-100 hover:underline rounded-full">
                        Travel
                      </button>
                    </Link>
                  )}
                  <Link to={"/profile"}>
                    <button className="text-base text-white font-semibold hover:text-blue-100 hover:underline rounded-full">
                      Profile
                    </button>
                  </Link>
                  <Link onClick={handleLogOut}>
                    <button className="text-base text-white font-semibold hover:text-blue-100 hover:underline rounded-full">
                      Logout
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="flex gap-5 lg:gap-10">
                  <Link to={"/signup"}>
                    <button className="text-base text-white font-semibold hover:text-blue-100 hover:underline rounded-full">
                      Sign Up
                    </button>
                  </Link>
                  <Link to={"/login"}>
                    <button className="text-base text-white font-semibold hover:text-blue-100 hover:underline rounded-full">
                      Login
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </ul>
        </nav>

        <div className="flex-grow flex m-5 min-h-[90vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/admin" element={<AdminLogin />} />

            {/* Travel Routes */}
            <Route path="/travel" element={<Travel />} />
            <Route path="/travel/train" element={<TrainTravel />} />
            <Route path="/travel/air" element={<AirTravel />} />

            {/* User Routes */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/update" element={<UpdateProfile />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/user/travel" element={<TravelDetails />}/>

            {/* Admin Routes */}
            <Route path="/adminpanel" element={<AdminPanel />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/user/:id" element={<UserDetails />}/>

            <Route path="*" element="Page Not Found" />
            <Route path="/denied" element={<Denied />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
