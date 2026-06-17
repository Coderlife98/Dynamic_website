import React, { useState } from "react";
import BreadCrumb from "../../component/Admin/BreadCrumb";

const Slider = () => {
  const [text, setText] = useState();
  const [slug, setSlug] = useState();
  const [image, setImage] = useState();

  const handleMenu = async () => {
    try {
    } catch (error) {}
  };
  return (
    <div>
      <div>
        <BreadCrumb title="Slider" />
      </div>
      <div className="mt-4  md:py-4   px-2 border border-slate-800  text-white">
        <div className="md:px-4">
          <h2 className=" text-xl font-semibold border-b border-slate-800 pb-2 md:text-2xl mb-4">
            Add
          </h2>
        </div>
        <form onSubmit={handleMenu} className="md:px-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-x-6 md:gap-y-4 ">
            <div>
              <label htmlFor="">Image</label> <br />
              <input
                type="file"
                name="image"
                required
                onChange={(e) => setImage(e.target.files[0])}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="">Text</label> <br />
              <input
                type="text"
                name="text"
                required
                onChange={(e) => setText(e.target.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Order"
              />
            </div>
            <div>
              <label htmlFor="">Categories</label> <br />
              <input
                type="text"
                name="categories"
                required
                onChange={(e) => setText(e.target.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Order"
              />
            </div>
            <div>
              <label htmlFor="">Button</label> <br />
              <input
                type="text"
                name="slug"
                required
                onChange={(e) => setSlug(e.target.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Order"
              />
              <input type="hidden" name="parentId" />
            </div>
          </div>
          <div>
            <button className="bg-indigo-500 mt-5 py-2 cursor-pointer rounded-sm w-full">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Slider;
