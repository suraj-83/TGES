import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AdminLogin from "./components/AdminLogin"; // Import the AdminLogin component
import AdminPanel from "./components/AdminPanel";
import RequireAuth from "./components/Auth/RequireAuth";
import Denied from "./components/Denied";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./redux/slices/authSlice";
import Home from "./components/Home";

function App() {
  const dispatch = useDispatch();
  
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  
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
        <nav className="bg-blue-800 p-4 h-[10vh]">
          <ul className="flex items-center justify-between">
            <Link to="/">
              <img
                src="https://www.tgestravel.com/assets/images/logo/tges-logo.png"
                alt="logo"
                className="h-8"
              />
            </Link>
            <div className="flex items-center mr-5 font-semibold">
              {isLoggedIn ? (
                <div className="flex gap-4">
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

        <div className="flex-grow flex justify-center items-center m-5 min-h-[90vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/admin" element={<AdminLogin />} />

            <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
              <Route path="/adminpanel" element={<AdminPanel />} />
            </Route>

            <Route path="/denied" element={<Denied />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
