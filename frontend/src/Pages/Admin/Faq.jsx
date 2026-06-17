import React, { useEffect, useRef, useState } from "react";
import BreadCrumb from "../../component/Admin/BreadCrumb";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Base_url } from "../../constant/constant";

const Faq = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const formRef = useRef();
  const { id } = useParams();
  const handleFaq = async (event) => {
    event.preventDefault();
    try {
      const data = {
        title,
        description,
        menuId: id,
      };
      const response = await axios.post(`${Base_url}faq/add`, data);
      if (response) {
        setTitle("");
        setDescription("");
        formRef.current.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    document.title = "Add FAQ || Dashboard";
  });
  return (
    <div>
      <BreadCrumb title="Faq" />
      <div className="mt-4  md:py-4   px-2 border border-slate-800  text-white">
        <div className="md:px-4">
          <h2 className=" text-xl font-semibold border-b border-slate-800 pb-2 md:text-2xl mb-4">
            Add
          </h2>
        </div>
        <form ref={formRef} onSubmit={handleFaq} className="md:px-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-x-6 md:gap-y-4 ">
            <input type="hidden" name="menuId" />

            <div>
              <label htmlFor="">Title</label> <br />
              <input
                type="text"
                name="title"
                required
                onChange={(e) => setTitle(e.target.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Title"
              />
            </div>
            <div>
              <label htmlFor="">Description</label> <br />
              <input
                type="text"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Description"
              />
            </div>
          </div>
          <div>
            <button className="bg-indigo-500 mt-5 py-2 cursor-pointer rounded-sm w-full">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Faq;
