import React from "react";

const LeftSide = () => {
  return (
    <div className="h-screen w-left bg-signUpColor p-20 flex flex-col gap-5">
      <img src="./dribbbleCopy.png" alt="" className=" h-11 w-40" />
      <span className="text-4xl font-bold text-signUpColor">
        Discover the world's top <br />
        Designers & Creatives
      </span>
      <img src="./imageSignUp.png" style={{ height: "70%", width: "100%" }} />

      <span className="text-signUpColor">
        Art by <u>Peter Tarka</u>
      </span>
    </div>
  );
};

export default LeftSide;
