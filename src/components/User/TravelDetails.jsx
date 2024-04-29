import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCurrentUserTravelDetails } from "../../redux/slices/travelSlice";

const TravelDetails = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await dispatch(getCurrentUserTravelDetails());
        setData(response.payload.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  console.log("userDetails", data);

  return (
    <div className="w-full flex flex-col items-start">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      <div className="my-5">
        <h2 className="font-bold text-2xl uppercase text-blue-500 mb-2">
          User Details
        </h2>
        <p className="my-2">
          <span className="font-bold">Name: </span>
          <span className="font-light">{data?.user?.fullName}</span>
        </p>
        <p className="my-2">
          <span className="font-bold">Email: </span>
          <span className="font-light">{data?.user?.email}</span>
        </p>
        <p className="my-2">
          <span className="font-bold">Gender: </span>
          <span className="font-light">{data?.user?.gender}</span>
        </p>
        <p className="my-2">
          <span className="font-bold">Country: </span>
          <span className="font-light">{data?.user?.country}</span>
        </p>
        <p className="my-2">
          <span className="font-bold">City: </span>
          <span className="font-light">{data?.user?.city}</span>
        </p>
      </div>
      <div className="w-full my-5">
        <h2 className="font-bold text-2xl uppercase text-blue-500 mb-2">
          Travel Details
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5">
          <div>
            <h3 className="font-bold text-xl underline mb-4">Train Travel</h3>
            {data?.trainTravel?.length > 0 ? (
              data?.trainTravel?.map((item, index) => (
                <div key={index}>
                  <p className="my-2">
                    <span className="font-bold">From: </span>
                    <span className="font-light">{item?.from}</span>
                  </p>
                  <p className="my-2">
                    <span className="font-bold">To: </span>
                    <span className="font-light">{item?.to}</span>
                  </p>
                  <p className="my-2">
                    <span className="font-bold">Date: </span>
                    <span className="font-light">
                      {new Date(item?.date).toLocaleString("default", {
                        month: "long",
                        year: "numeric",
                        day: "numeric",
                      })}
                    </span>
                  </p>
                  <p className="my-2">
                    <span className="font-bold">Class of Travel: </span>
                    <span className="font-light">{item?.classOfTravel}</span>
                  </p>
                  <hr className="my-5" />
                </div>
              ))
            ) : (
              <p>No data found</p>
            )}
          </div>
          <div>
            <h3 className="font-bold text-xl underline mb-4">Air Travel</h3>
            {data?.airTravel?.length > 0 ? (
              data?.airTravel?.map((item, index) => (
                <div key={index}>
                  <p className="my-2">
                    <span className="font-bold">From: </span>
                    <span className="font-light">{item?.from}</span>
                  </p>
                  <p className="my-2">
                    <span className="font-bold">To: </span>
                    <span className="font-light">{item?.to}</span>
                  </p>
                  <p className="my-2">
                    <span className="font-bold">Date: </span>
                    <span className="font-light">
                      {new Date(item?.date).toLocaleString("default", {
                        month: "long",
                        year: "numeric",
                        day: "numeric",
                      })}
                    </span>
                  </p>
                  <p className="my-2">
                    <span className="font-bold">Class of Travel: </span>
                    <span className="font-light">{item?.classOfTravel}</span>
                  </p>
                  <hr className="my-5" />
                </div>
              ))
            ) : (
              <p>No data found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelDetails;
