import React from "react";
import style from "./option.module.css";
import { Link } from "react-router-dom";

const OptionChoose = () => {
  const data = [
    {
      image: "./designer.png",
      message:
        "For a clean, minimalist design aesthetic, this phrase highlights that the simple appearance is intentional and elegant.",
      qoute: "I'm a designer looking to share my work",
    },
    {
      image: "./hireing.png",
      message:
        "For those wanting a unique, differentiated brand presence, this offers one-of-a-kind design solutions.",
      qoute: "I'm looking to hire a designer",
    },
    {
      image: "./inspiration.png",
      message:
        "Tapping into the sense of curiosity and imagination designers crave to produce meaningful work.",
      qoute: "I'm looking for design inspiration",
    },
  ];
  return (
    <div className="m-7 p-5">
      <img src="./pinkDribble.png" alt="" className="h-14" />
      <div className=" w-2/4 mx-auto flex flex-col gap-20">
        <center className="flex flex-col gap-10">
          {" "}
          <p className="font-bold text-5xl">
            {" "}
            Welcome! Let's create your profile
          </p>
          <p className="text-gray-500 text-lg">
            Select the options that best describes you. Don't worry, you can
            explore other options later.
          </p>
        </center>
        <div className="grid grid-cols-3 gap-10">
          {data.map((item) => {
            return <Options data={item}></Options>;
          })}
        </div>
        <p className="w-fit mx-auto font-bold text-xl">
          Anything else? you can select multiple
        </p>
        <Link to="/verify" className="mx-auto">
          <button
            type="submit"
            className="bg-pink-500 text-white rounded-lg h-14 w-64"
          >
            Next
          </button>
        </Link>
        <p className="text-gray-500 text-lg w-fit mx-auto">
          or press{" "}
          <Link to="/profile" className="font-bold">
            {" "}
            RETURN
          </Link>
        </p>
      </div>
    </div>
  );
};

const Options = ({ data }) => {
  return (
    <main>
      <div className={`${style.card}`}>
        <input type="checkbox" className={`${style.round}`} name="check" />
        <img src={data.image} alt="" />
        <div>
          <h2>{data.qoute}</h2>
          <p>{data.message}</p>
        </div>
      </div>
    </main>
  );
};

export default OptionChoose;
