import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="m-7 p-5">
      <img src="./pinkDribble.png" alt="" className="h-14" />
      <div className=" w-2/4 mx-auto flex flex-col gap-10">
        <p className="font-bold text-5xl">
          {" "}
          Welcome! Let's create your profile
        </p>
        <p className="text-gray-500 text-lg">
          Let others get to know you better! you can do these later
        </p>

        <p className="font-bold text-2xl">Add an avatar</p>
        <div className="flex flex-row gap-10">
          <img
            src="./default-Image.png"
            alt=""
            className="border-2 border-gray-500 border-dotted h-60 w-60 rounded-full"
          />
          <div className="my-auto ">
            <input type="file" className="border-2 border-black h-10 " />
            <p> {">"} Or choose one of our defaults</p>
          </div>
        </div>
        <p className="font-bold text-2xl">Add your location</p>
        <input
          type="text"
          className="border-b-2 border-gray-300 font-bold h-10 "
        />
        <div>
          <button
            type="submit"
            className="bg-pink-500 text-white rounded-lg h-14 w-64"
          >
            <Link to="/option"> Next</Link>
          </button>
          <p className="text-gray-500 text-lg">
            or press{" "}
            <Link to="/" className="font-bold">
              {" "}
              RETURN
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
