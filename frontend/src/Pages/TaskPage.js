import React, { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlinePlusCircle } from "react-icons/ai";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";

import AllTask from "../components/AllTask";

const TaskPage = () => {
  const [userName, setUserName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear("user");
    navigate("/");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserName(user.name);
    }
  }, []);

  return (
    <>
      <div className="">
        <div className="flex justify-between p-4 ">
          <div className="logout">
            <button
              className="bg-red-400 p-2 rounded-2xl text-xl font-bold  shadow-2xl hover:scale-105"
              onClick={handleLogout}
            >
              LogOut
            </button>
          </div>
          <div className="userName font-mono font-bold text-xl">
            USER:{userName.toUpperCase()}
          </div>
        </div>
        <div className="flex justify-center ">
          <button
            className="p-3 bg-violet-400 font-mono text-2xl rounded-3xl font-bold flex items-center gap-1 shadow-xl hover:scale-105"
            onClick={() => setShowModal(!showModal)}
          >
            <AiOutlinePlusCircle size={"30px"} />
            Add
          </button>
          <Modal
            isVisible={showModal}
            onClose={() => setShowModal(false)}
            name="Save"
          />
        </div>
        <div>
          <AllTask />
        </div>
      </div>
    </>
  );
};

export default TaskPage;
