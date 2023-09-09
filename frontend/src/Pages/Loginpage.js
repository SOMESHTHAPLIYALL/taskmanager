import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [icon, setIcon] = useState(<AiFillEye size={"40px"} />);
  const [text, setText] = useState("password");

  const navigate = useNavigate();

  const handlePassword = () => {
    if (text === "password") {
      setText("text");
      setIcon(<AiFillEyeInvisible size={"40px"} />);
    }
    if (text === "text") {
      setText("password");
      setIcon(<AiFillEye size={"40px"} />);
    }
  };

  const handleClick = async () => {
    try {
      if (!email || !password) {
        alert("Please fill all the fields");
        return;
      }
      const { data } = await axios.post("/users/login", {
        email: email,
        password: password,
      });
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      console.log("Login Succesfull");
      navigate("/taskPage");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/taskPage");
    }
  }, [navigate]);
  return (
    <>
      <div className=" h-screen flex  justify-center items-center">
        <div className="box border-2 border-black shadow-2xl rounded-2xl p-4  flex flex-col items-center">
          <h1 className="font-bold font-serif text-4xl mt-5">Login</h1>
          <div className="inputs flex flex-col gap-5 mt-10">
            <div className="email  w-full p-2 rounded-xl bg-slate-200 flex items-center">
              <input
                className="outline-none bg-slate-200 w-full h-full"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MdEmail size={"40px"} />
            </div>

            <div className="password bg-slate-200 w-full p-2 rounded-xl flex items-center">
              <input
                className="outline-none bg-slate-200 w-full h-full"
                type={text}
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handlePassword}>{icon}</button>
            </div>
          </div>
          <button
            className="mt-4 bg-purple-400 p-3 rounded-xl font-mono font-bold hover:scale-105"
            onClick={handleClick}
          >
            Login
          </button>
          <div className="linkForSignup mt-5">
            <h1 className="text-xl font-semibold">
              Dont have an account?{" "}
              <Link
                to="/signUp"
                className="text-red-500 font-bold underline underline-offset-4"
              >
                SignUp
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
