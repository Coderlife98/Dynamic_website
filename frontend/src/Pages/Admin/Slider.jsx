import React, { useState, useRef, useEffect } from "react";
import BreadCrumb from "../../component/Admin/BreadCrumb";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Base_url } from "../../constant/constant";
import toast from "react-hot-toast";

const Slider = () => {
  const [heading, setHeading] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [sliderData, setSliderData] = useState([]);
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const formRef = useRef();

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const { id } = useParams();
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const handleMenu = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("heading", heading);
      formData.append("subtitle", subtitle);
      formData.append("slug", slug);
      formData.append("image", image);
      formData.append("menuId", id);
      formData.append("category", category);
      const response = await axios.post(
        `${Base_url}slider/Slider/add`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      if (response) {
        toast.success(response.data.message);
        setHeading("");
        setCategory("");
        setImage(null);
        setSlug("");
        setSubtitle("");
        formRef.current.reset();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const getSlider = async () => {
    try {
      const getData = await axios.get(`${Base_url}slider/get`);
      setSliderData(getData.data.data);
      console.log(sliderData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Add Slider || Dashboard";
  });

  useEffect(() => {
    getSlider();
  }, []);

  return (
    <div>
      <div>
        <BreadCrumb title="Slider" />

        <div className="text-end"></div>
      </div>
      <div className="mt-4  md:py-4   px-2 border border-slate-800  text-white">
        <div className="md:px-4">
          <h2 className=" text-xl font-semibold border-b border-slate-800 pb-2 md:text-2xl mb-4">
            Add
          </h2>
        </div>
        <form ref={formRef} onSubmit={handleMenu} className="md:px-8">
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
            </div>
            <div>
              <label htmlFor="heading">Heading</label> <br />
              <input
                type="text"
                name="heading"
                id="heading"
                required
                onChange={(e) => setHeading(e.target.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Slider Heading"
              />
            </div>
            <div>
              <label htmlFor="subtitle">Sub Title</label> <br />
              <input
                type="text"
                name="subtitle"
                id="subtitle"
                onChange={(e) => setSubtitle(e.target.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Slider Description"
              />
            </div>

            <div>
              <label htmlFor="slug">Button</label> <br />
              <input
                type="text"
                name="slug"
                id="slug"
                required
                onChange={(e) => setSlug(e.target.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Button Name"
              />
              <input type="hidden" name="menuId" />
            </div>
            <div>
              <label htmlFor="categories">Categories</label> <br />
              <input
                type="text"
                name="categories"
                id="categories"
                onChange={(e) => setCategory(e.target.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Categories"
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

      <div className="grid md:grid-cols-2 gap-5">
        {sliderData &&
          sliderData.length > 0 &&
          sliderData.map((items, index) => (
            <div className="mt-4 border p-2 border-slate-800" key={index}>
              <div>
                <img
                  src={`${Base_url.replace("/api/", "/")}${items.image}`}
                  className="w-full h-52"
                  alt=""
                />
                <div className="my-2">
                  <h5 className="text-slate-300 my-2 text-lg">
                    {items.heading}
                  </h5>
                  <p className="text-slate-300 my-2 text-sm">
                    {items.subtitle}
                  </p>
                  <button disabled className="bg-yellow-500 py-2 px-5">
                    {items.slug}
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Slider;
