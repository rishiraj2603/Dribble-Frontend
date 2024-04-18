import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Cloudinary } from "@cloudinary/url-gen";

const Profile = () => {
  const [image, setImage] = useState("");

  // useEffect(() => {
  //   const imageData = new FormData();
  //   imageData.append("Image", image);
  //   imageData.append("upload_preset", "Dribble-frontend");
  //   imageData.append("cloud_name", "dseheonv2");
  //   const res = axios.post(
  //     "https://api.cloudinary.com/v1_1/dseheonv2/image/upload",
  //     {
  //       body: imageData,
  //     }
  //   );
  //   const req = res.data;
  //   console.log("🚀 ~ useEffect ~ req:", req);
  // }, [image]);

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
            <input
              type="file"
              className="border-2 border-black h-10 "
              onChange={(e) => setImage(e.target.files[0])}
            />
            <p> {">"} Or choose one of our defaults</p>
          </div>
        </div>
        <p className="font-bold text-2xl">Add your location</p>
        <input
          type="text"
          className="border-b-2 border-gray-300 font-bold h-10 "
        />
        <div>
          <Link to="/option">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-lg h-14 w-64"
            >
              Next
            </button>
          </Link>
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
