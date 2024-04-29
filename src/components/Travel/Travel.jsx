import React from "react";
import { Link } from "react-router-dom";

const Travel = () => {
  return (
    <div className="flex items-center flex-col w-full justify-center min-h-[90vh]">
      <h1 className="text-3xl font-bold uppercase">Travel Forms</h1>
      <div className="flex gap-5 mt-5">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
          <Link to={"/travel/train"}>Train</Link>
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
          <Link to={"/travel/air"}>Air</Link>
        </button>
      </div>
    </div>
  );
};

export default Travel;
