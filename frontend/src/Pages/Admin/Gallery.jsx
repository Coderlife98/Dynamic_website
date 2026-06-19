import React, { useEffect, useRef, useState } from "react";
import BreadCrumb from "../../component/Admin/BreadCrumb";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Base_url } from "../../constant/constant";
import toast from "react-hot-toast";

const Gallery = () => {
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");
  const formRef = useRef();
  const { id } = useParams();
  const handleGallery = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("menuId", id);
      formData.append("isActive", status);
      formData.append("category", category);
      const response = await axios.post(
        `${Base_url}gallery/Gallery/add`,
        formData,
      );
      if (response) {
        setStatus("");
        setCategory("");
        setImage(null);
        formRef.current.reset();
        console.log(response);
        // toast.success(response.data.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    document.title = "Add Gallery || Dashboard";
  });
  return (
    <div>
      <BreadCrumb title="Gallery" />
      <div className="mt-4  md:py-4   px-2 border border-slate-800  text-white">
        <div className="md:px-4">
          <h2 className=" text-xl font-semibold border-b border-slate-800 pb-2 md:text-2xl mb-4">
            Add
          </h2>
        </div>
        <form ref={formRef} onSubmit={handleGallery} className="md:px-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-x-6 md:gap-y-4 ">
            <input type="hidden" name="menuId" />

            <div>
              <label htmlFor="image">Image</label> <br />
              <input
                type="file"
                name="image"
                accept="image/png, image/jpg, image/jpeg, image/webp"
                required
                onChange={(e) => setImage(e.target.files[0])}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
              />
            </div>
            <div>
              <label htmlFor="category">Category</label> <br />
              <input
                type="text"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Category"
              />
            </div>
            <div>
              <label htmlFor="isActive">Status</label> <br />
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

export default Gallery;
