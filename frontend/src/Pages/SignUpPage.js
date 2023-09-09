import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";

const SignUpPage = () => {
  const [name, setName] = useState("");
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
      if (!name || !password || !email) {
        alert("Please enter all fields");
        return;
      }
      console.log(name, email, password);

      await axios.post("/users/register", {
        name: name,
        password: password,
        email: email,
      });
      navigate("/");
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
          <h1 className="font-bold font-serif text-4xl mt-5">SignUp</h1>
          <div className="inputs flex flex-col gap-5 mt-10">
            <div className="name bg-slate-200 w-full p-2 rounded-xl flex items-center">
              <input
                className="outline-none bg-slate-200 w-full h-full"
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <FaUserCircle size={"40px"} />
            </div>

            <div className="email bg-slate-200  w-full p-2 rounded-xl flex items-center">
              <input
                className="outline-none w-full bg-slate-200 h-full"
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
            SignUp
          </button>

          <div className="linkForSignup mt-5">
            <h1 className="text-xl font-semibold">
              Already have an account?{" "}
              <Link
                to="/"
                className="text-red-500 font-bold underline underline-offset-4"
              >
                Login
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
