import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveUserName } from "../Store/store";

// make a check on username taken or not

const RightSide = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const nameRef = useRef();

  async function submitHandler(e) {
    e.preventDefault();
    const name = nameRef.current.value;
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      const res = await axios.post(`http://localhost:4000/signin`, {
        name,
        username,
        email,
        password,
      });

      const data = res.data;
      console.log("🚀 ~ submitHandler ~ data:", data);
      navigate("/profile");
    } catch (error) {
      console.log(error.response.data);
    }
    dispatch(saveUserName({ username }));
    navigate("/profile");
  }
  return (
    <div className="h-screen w-right p-4">
      <div className="flex justify-end">
        <p className=" w-fit">
          Already a member?{" "}
          <a href="#" className="hover:underline text-violet-600">
            {" "}
            Sign In
          </a>
        </p>
      </div>
      <div className="container text-2xl h-95">
        <form
          onSubmit={submitHandler}
          id="signUpForm"
          className="flex flex-col gap-12 w-3/5 h-85  mx-auto my-5"
        >
          <h1 className="font-bold text-4xl">Sign Up to Dribble</h1>
          <div className="flex gap-4">
            <div className="flex flex-col">
              <label for="Name" className="font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                ref={nameRef}
                className="bg-gray-200 h-10 rounded-lg"
                required
              />
            </div>
            <div className="flex flex-col">
              <label for="Username" className="font-bold">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                ref={usernameRef}
                className="bg-gray-200 h-10 rounded-lg"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label for="email" className="font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              ref={emailRef}
              className="bg-gray-200 h-10 rounded-lg"
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <label for="password" className="font-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              ref={passwordRef}
              className="bg-gray-200 h-10 rounded-lg"
              required
            />
          </div>
          <div className="flex gap-4">
            <input
              type="checkbox"
              id="check"
              name="check"
              className="w-10"
              required
            />
            <p className="text-base">
              Creating an account means you're okay with our{" "}
              <a className="hover:underline text-violet-600">
                Terms of Service
              </a>
              ,{" "}
              <a className="hover:underline text-violet-600">Privacy Policy</a>,
              and our default{" "}
              <a className="hover:underline text-violet-600">
                Notification Settings.
              </a>
            </p>
          </div>
          <button
            type="submit"
            className="float-left bg-pink-500 text-white rounded-lg h-14 w-64"
          >
            Create Account
          </button>
          <div id="message" className=" text-base">
            {" "}
            This site is protected by reCAPTCHA and the Google <br />
            <a className="hover:underline text-violet-600">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a className="hover:underline text-violet-600">Terms of Service</a>{" "}
            apply.
          </div>
        </form>
      </div>
    </div>
  );
};

export default RightSide;
