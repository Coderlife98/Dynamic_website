import React, { useEffect, useRef, useState } from "react";
import BreadCrumb from "../../component/Admin/BreadCrumb";
import axios from "axios";
import { Base_url } from "../../constant/constant";
import toast from "react-hot-toast";
const About = () => {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [image_1, setImage_1] = useState(null);
  const [image_2, setImage_2] = useState(null);
  const [hasAboutData, setHasAboutData] = useState(false);
  const formRef = useRef();

  const handleAbout = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("heading", heading);
      formData.append("description", description);
      formData.append("isActive", status);
      formData.append("image_1", image_1);
      formData.append("image_2", image_2);

      const operation = await axios.post(
        `${Base_url}about/About/add`,
        formData,
      );
      if (operation) {
        toast.success(operation.data.message);
        setHeading("");
        setDescription("");
        setImage_1(null);
        setImage_2(null);
        setStatus("");
        formRef.current.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getAbout = async () => {
      try {
        const res = await axios.get(`${Base_url}about/get`);

        if (res.data && res.data.data) {
          setHasAboutData(true);
          setHeading("");
          setDescription("");
          setImage_1(null);
          setImage_2(null);
          setStatus("");
          formRef.current.reset();
        }
      } catch (error) {
        console.log(error);
      }
    };

    getAbout();
  }, []);

  return (
    <div>
      <BreadCrumb title="About Us" />
      <div className="mt-4  md:py-4   px-2 border border-slate-800  text-white">
        <div className="md:px-4">
          <h2 className=" text-xl font-semibold border-b border-slate-800 pb-2 md:text-2xl mb-4">
            Add
          </h2>
        </div>
        <form ref={formRef} onSubmit={handleAbout} className="md:px-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-x-6 md:gap-y-4 ">
            <input type="hidden" name="menuId" />

            <div>
              <label htmlFor="image_1">Image 1</label> <br />
              <input
                type="file"
                name="image_1"
                id="image_1"
                accept="image/png, image/jpg, image/jpeg, image/webp"
                required={!hasAboutData}
                onChange={(e) => setImage_1(e.target.files[0])}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
              />
            </div>
            <div>
              <label htmlFor="image_2">Image 2</label> <br />
              <input
                type="file"
                name="image_2"
                id="image_2"
                accept="image/png, image/jpg, image/jpeg, image/webp"
                onChange={(e) => setImage_2(e.target.files[0])}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
              />
            </div>
            <div>
              <label htmlFor="heading">Heading</label> <br />
              <input
                type="text"
                name="heading"
                id="heading"
                onChange={(e) => setHeading(e.target.value)}
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
                onChange={(e) => setDescription(e.target.value)}
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

export default About;
