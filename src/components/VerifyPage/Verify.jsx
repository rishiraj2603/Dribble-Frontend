import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { Resend } from "resend";
import { useSelector } from "react-redux";

const Verify = () => {
  const [email, setEmail] = useState("");
  const username = useSelector((store) => store.userName.userName.username);
  async function sendEmail() {
    const res = await axios.post("http://localhost:4000/email", { username });
    const { email } = res.data;
    setEmail(email);
  }

  const resend = new Resend("re_123456789");

  (async function () {
    const { data, error } = await resend.emails.send({
      from: "raj2002rishi@gmail.com",
      to: email,
      subject: "Hello World",
      html: "<strong>It works!</strong>",
    });

    if (error) {
      return console.error({ error });
    }

    console.log({ data });
  })();

  useEffect(() => {
    sendEmail();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
};

export default Verify;
