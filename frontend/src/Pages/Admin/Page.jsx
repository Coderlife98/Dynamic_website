import React, { useEffect, useState } from "react";
import BreadCrumb from "../../component/Admin/BreadCrumb";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Base_url } from "../../constant/constant";
// import mongoose from "mongoose";

const Page = () => {
  const [name, setName] = useState();
  const { id } = useParams();
  const getName = async () => {
    event.preventDefault();
    try {
      const isExistOnDb = await axios.post(`${Base_url}menu/getMenyById/${id}`);
      isExistOnDb ? setName(isExistOnDb.data.data.title) : "";
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getName();
  }, []);
  return (
    <div>
      <BreadCrumb title={name} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5  my-4 md:my-10">
        <div className="border border-slate-800 px-4 py-6  ">
          <div>
            <h3 className="text-center text-slate-400 text-xl">Slider</h3>
            <Link
              to={`/dashboard/slider/${id}`}
              className="bg-indigo-500 text-white py-2 inline-block text-center mt-4 w-full"
            >
              Add Slider +
            </Link>
          </div>
        </div>
        <div className="border border-slate-800 px-4 py-6  ">
          <div>
            <h3 className="text-center text-slate-400 text-xl">Hero</h3>
            <Link
              to={`/dashboard/hero/${id}`}
              className="bg-indigo-500 text-white py-2 inline-block text-center mt-4 w-full"
            >
              Add Hero +
            </Link>
          </div>
        </div>
        <div className="border border-slate-800 px-4 py-6  ">
          <div>
            <h3 className="text-center text-slate-400 text-xl">FAQ</h3>
            <Link
              to={`/dashboard/faq/${id}`}
              className="bg-indigo-500 text-white py-2 inline-block text-center mt-4 w-full"
            >
              Add FAQ +
            </Link>
          </div>
        </div>
        <div className="border border-slate-800 px-4 py-6  ">
          <div>
            <h3 className="text-center text-slate-400 text-xl">Gallery</h3>
            <Link
              to={`/dashboard/gallery/${id}`}
              className="bg-indigo-500 text-white py-2 inline-block text-center mt-4 w-full"
            >
              Add Gallery +
            </Link>
          </div>
        </div>
        <div className="border border-slate-800 px-4 py-6  ">
          <div>
            <h3 className="text-center text-slate-400 text-xl">NEWS</h3>
            <Link
              to={`/dashboard/news/${id}`}
              className="bg-indigo-500 text-white py-2 inline-block text-center mt-4 w-full"
            >
              Add NEWS +
            </Link>
          </div>
        </div>
        <div className="border border-slate-800 px-4 py-6  ">
          <div>
            <h3 className="text-center text-slate-400 text-xl">Team</h3>
            <Link
              to={`/dashboard/team/${id}`}
              className="bg-indigo-500 text-white py-2 inline-block text-center mt-4 w-full"
            >
              Add Team +
            </Link>
          </div>
        </div>
        <div className="border border-slate-800 px-4 py-6  ">
          <div>
            <h3 className="text-center text-slate-400 text-xl">Testimonial</h3>
            <Link
              to={`/dashboard/testimonial/${id}`}
              className="bg-indigo-500 text-white py-2 inline-block text-center mt-4 w-full"
            >
              Add Testimonial +
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
