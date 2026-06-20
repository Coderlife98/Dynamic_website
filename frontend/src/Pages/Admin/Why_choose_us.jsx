import React, { useEffect, useRef, useState } from "react";
import BreadCrumb from "../../component/Admin/BreadCrumb";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Base_url } from "../../constant/constant";
import toast from "react-hot-toast";

const Why_choose_us = () => {
  const { id } = useParams();
  const formRef = useRef();
  const [image, setImage] = useState(null);
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState();
  const [hasAboutData, setHasAboutData] = useState(false);
  const handleWhy = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("heading", heading);
      formData.append("description", description);
      formData.append("isActive", status);
      formData.append("menuId", id);
      const addWhy = await axios.post(
        `${Base_url}why/Why_Choose_us/add`,
        formData,
      );
      if (addWhy) {
        toast.success(addWhy.data.message);
        setHeading("");
        setDescription("");
        setImage(null);
        setStatus("");
        formRef.current.reset();
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Something Went Wrong");
      }
    }
  };

  const getData = async () => {
    try {
      const get = await axios.get(`${Base_url}why/get`);
      console.log(get);
      if (get) {
        setHasAboutData(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <BreadCrumb title="Why Choose Us" />
      <div className="mt-4  md:py-4   px-2 border border-slate-800  text-white">
        <div className="md:px-4">
          <h2 className=" text-xl font-semibold border-b border-slate-800 pb-2 md:text-2xl mb-4">
            Add
          </h2>
        </div>
        <form ref={formRef} onSubmit={handleWhy} className="md:px-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-x-6 md:gap-y-4 ">
            <input type="hidden" name="menuId" />
            <div>
              <label htmlFor="image">Image </label> <br />
              <input
                type="file"
                name="image"
                id="image"
                accept="image/png, image/jpg, image/jpeg, image/webp"
                required={!hasAboutData}
                onChange={(e) => setImage(e.target?.files[0])}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
              />
            </div>
            <div>
              <label htmlFor="heading">Heading</label> <br />
              <input
                type="text"
                name="heading"
                id="heading"
                value={heading}
                onChange={(e) => setHeading(e.target?.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Heading"
              />
            </div>
            <div>
              <label htmlFor="description">Description</label> <br />
              <input
                type="text"
                name="description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target?.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Description"
              />
            </div>
            <div>
              <label htmlFor="isActive">Status</label> <br />
              <select
                name="isActive"
                value={status}
                className="w-full border border-slate-600 p-2"
                onChange={(e) => setStatus(e.target?.value)}
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

export default Why_choose_us;
