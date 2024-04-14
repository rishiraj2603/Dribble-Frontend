import React from "react";

const Navbar = () => {
  return (
    <div className=" w-screen flex flex-row">
      <div className="w-75  flex flex-row gap-11">
        <a href="#" className="w-40 block">
          <img src="/dribble.png" alt="dribble logo" />
        </a>
        <ul className="w-fit flex flex-row gap-20 justify-center items-center">
          <li>
            <a href="#">Inspiration</a>
          </li>
          <li>
            <a href="#">Find Work</a>
          </li>
          <li>
            <a href="#">Learn Design</a>
          </li>
          <li>
            <a href="#">Go Pro</a>
          </li>
          <li>
            <a href="#">Hire Designers</a>
          </li>
        </ul>
      </div>
      <div className=" flex flex-row gap-10 justify-center items-center">
        <input
          type="text"
          className="border-2 border-black w-36 rounded-lg bg-gray-200 p-1 "
          placeholder=" Search"
        />
        <img
          src=""
          alt=""
          className="border-2 border-black w-20 h-20 rounded-full"
        />
        <button className="border-2 border-black h-10 w-20 bg-pink-500 text-white rounded-lg">
          Upload
        </button>
      </div>
    </div>
  );
};

export default Navbar;
