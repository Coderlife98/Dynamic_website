import React, { useRef, useState } from "react";
import BreadCrumb from "../../component/Admin/BreadCrumb";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Base_url } from "../../constant/constant";

const News = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");
  const { id } = useParams();
  const formRef = useRef();
  const handleNews = async () => {
    try {
      const data = {
        title,
        status,
        category,
        menuId: id,
      };
      const response = await axios.post(`${Base_url}news/add`, data);
      if (response) {
        setStatus("");
        setTitle("");
        setCategory("");
        formRef.current.reset();
      }
    } catch (error) {}
  };
  return (
    <div>
      <BreadCrumb title="News" />
      <div className="mt-4  md:py-4   px-2 border border-slate-800  text-white">
        <div className="md:px-4">
          <h2 className=" text-xl font-semibold border-b border-slate-800 pb-2 md:text-2xl mb-4">
            Add
          </h2>
        </div>
        <form
          onSubmit={handleNews}
          ref={formRef}
          className="grid gap-5 md:grid-cols-2 md:px-8"
        >
          <div>
            <label htmlFor="">News</label> <br />
            <input
              type="text"
              name="title"
              required
              onChange={(e) => setTitle(e.target.value)}
              className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
              placeholder="Enter News"
            />
          </div>
          <div>
            <label htmlFor="">Category</label> <br />
            <input
              type="text"
              name="category"
              required
              onChange={(e) => setCategory(e.target.value)}
              className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
              placeholder="Enter category"
            />
          </div>
          <input type="hidden" name="menuId" />
          <div>
            <label htmlFor="">Status</label> <br />
            <select
              name="isActive"
              className="w-full border border-slate-600 p-2"
              onChange={(e) => setStatus(e.target.value)}
              id="isActive"
            >
              <option value="">-- Select --</option>
              <option value="true">Active</option>
              <option value="false">InActive</option>
            </select>
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

export default News;
