import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Denied = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex flex-col items-center px-5 justify-center">
      <h1 className="text-5xl lg:text-9xl font-bold">OOPS!</h1>
      <p className="uppercase font-semibold text-lg py-5 text-blue-500">
        403 - Access Denied
      </p>
      <p className="w-full lg:w-1/3 text-center">
        You do not have permission to access this page. <br />
        Please contact your site administrator to request access.
      </p>
      <Link to={navigate("/")} className="py-5">
        <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 transition-all duration-200 px-5 py-3 text-sm lg:text-base uppercase rounded-full text-white font-semibold">
          go to homepage
        </button>
      </Link>
    </div>
  );
};

export default Denied;
