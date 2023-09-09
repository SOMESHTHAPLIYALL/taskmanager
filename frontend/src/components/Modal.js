import React, { useState } from "react";
import axios from "axios";

const Modal = ({ isVisible, onClose, name, todoid, edit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = async (req, res) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (edit) {
      try {
        await axios.post("/api/v1/todos/editTodos", {
          todoid: todoid,
          title: title,
          description: description,
        });
        onClose();
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios.post("/api/v1/todos/postTodos", {
          title: title,
          description: description,
          userid: user._id,
        });
        onClose();
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed  inset-0  bg-opacity-25 backdrop-blur-xl flex justify-center items-center h-screen">
        <div className="lg:w-fit md:w-fit w-full p-2 flex flex-col">
          <button
            className=" text-black place-self-end text-2xl font-bold"
            onClick={() => onClose()}
          >
            X
          </button>
          <div className=" bg-white p-4 shadow-2xl rounded-lg flex flex-col gap-10">
            <div className="flex gap-1 justify-between">
              <label className="font-bold text-xl" htmlFor="title">
                Title:{" "}
              </label>
              <input
                className="bg-slate-300 p-2 rounded-lg outline-none"
                placeholder="Title"
                required
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex gap-1 justify-between">
              <label className="font-bold text-xl" htmlFor="desc">
                Description:{" "}
              </label>
              <textarea
                rows={"5"}
                cols={"24"}
                className="bg-slate-300 p-2 rounded-lg outline-none"
                placeholder="Description"
                required
                id="desc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className=" mt-5 flex justify-center">
            <button
              className="bg-violet-500 p-4 rounded-2xl font-bold text-2xl hover:scale-105"
              onClick={handleSave}
            >
              {name}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
