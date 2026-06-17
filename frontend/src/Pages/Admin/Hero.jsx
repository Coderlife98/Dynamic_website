import React, { useEffect, useRef, useState } from "react";
import BreadCrumb from "../../component/Admin/BreadCrumb";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Base_url } from "../../constant/constant";

const Hero = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const formRef = useRef();
  const { id } = useParams();
  const handleHero = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", title);
      formData.append("category", category);
      formData.append("menuId", id);
      const response = await axios.post(`${Base_url}hero/Hero/add`, formData);
      if (response) {
        setTitle("");
        setImage(null);
        setCategory("");
        formRef.current.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    document.title = "Add Hero || Dashboard";
  });
  return (
    <div>
      <BreadCrumb title="Hero" />
      <div className="mt-4  md:py-4   px-2 border border-slate-800  text-white">
        <div className="md:px-4">
          <h2 className=" text-xl font-semibold border-b border-slate-800 pb-2 md:text-2xl mb-4">
            Add
          </h2>
        </div>
        <form ref={formRef} onSubmit={handleHero} className="md:px-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-x-6 md:gap-y-4 ">
            <div>
              <label htmlFor="image">Image</label> <br />
              <input
                type="file"
                name="image"
                id="image"
                accept="image/png, image/jpeg, image/jpg, image/webp"
                required
                onChange={(e) => setImage(e.target?.files[0])}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
              />
              <input type="hidden" name="parentId" />
            </div>
            <div>
              <label htmlFor="title">Title</label> <br />
              <input
                type="text"
                name="title"
                id="title"
                required
                onChange={(e) => setTitle(e.target.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Title"
              />
            </div>
            <div>
              <label htmlFor="category">Category</label> <br />
              <input
                type="text"
                name="category"
                id="category"
                onChange={(e) => setCategory(e.target.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Category"
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

export default Hero;
