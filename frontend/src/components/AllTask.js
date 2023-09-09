import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineDownloadDone } from "react-icons/md";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { BsDatabaseFillX } from "react-icons/bs";
import Modal from "./Modal";

const AllTask = () => {
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [todoid, setTodoid] = useState("");
  const [delid, setDelid] = useState();
  const [colorId, setColorId] = useState([]);

  const showData = async (req, res) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const res = await axios.post("/todos/getTodos", { userid: user._id });
      setTodos(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDel = async (req, res) => {
    try {
      await axios.post("/todos/deleteTodos", { delid: delid });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showData();
  }, []);

  useEffect(() => {
    handleDel();
  }, [delid]);

  return (
    <>
      <div className="tasks flex flex-col items-center w-screen">
        {todos ? (
          todos?.map((todo) => {
            return (
              <>
                <div className="bg-slate-300 mt-5 p-4  shadow-xl cursor-pointer rounded-2xl flex items- justify-between w-[300px]">
                  <div className="titleAndDescritpion   overflow-y-auto ">
                    <p className="font-bold ">{todo.title}</p>
                    <p className="">{todo.description}</p>
                  </div>
                  <div className="icons flex justify-center items-center gap-5 text-3xl">
                    <AiFillEdit
                      className="cursor-pointer hover:scale-105"
                      color="blue"
                      onClick={() => {
                        setShowModal(true);
                        setEdit(true);
                        setTodoid(todo._id);
                      }}
                    />

                    <AiFillDelete
                      className="cursor-pointer hover:scale-105"
                      color="red"
                      onClick={() => {
                        setDelid(todo._id);
                      }}
                    />
                  </div>
                  <Modal
                    todoid={todoid}
                    name={"Edit and Save"}
                    isVisible={showModal}
                    onClose={() => setShowModal(false)}
                    edit={edit}
                  />
                </div>
              </>
            );
          })
        ) : (
          <div className="flex items-center mt-36 gap-2 lg:flex-row flex-col ">
            <h1 className="font-bold text-4xl">No Tasks to display</h1>
            <BsDatabaseFillX size={"50px"} />
          </div>
        )}
      </div>
    </>
  );
};

export default AllTask;
