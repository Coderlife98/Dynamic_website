import React, { useEffect, useState } from "react";
import BreadCrumb from "../../component/Admin/BreadCrumb";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Base_url } from "../../constant/constant";
const ChildMenu = () => {
  //   const [loading, setLoading] = useState();
  const [title, setTitle] = useState();
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const handleMenu = async (event) => {
    event.preventDefault();
    try {
      //   setLoading(true);
      if (!id) {
        return toast.error("Id Not Exist");
      }
      const isExistOnDb = await axios.post(`${Base_url}menu/getMenyById/${id}`);
      if (!isExistOnDb.data) {
        return toast.error("Data not Exist On DB");
      }
      const path = "/" + title.toLowerCase().replace(/\s+/g, "");
      const data = {
        title,
        parentId: id,
        status,
        path,
      };
      const createMenu = await axios.post(`${Base_url}menu/create`, data);
      if (createMenu) {
        toast.success("Menu Created !!");
        navigate("/dashboard/menu");
      }
    } catch (error) {
      console.log(error);
      //   setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Add Child Menu || Dashboard";
  });
  return (
    <div>
      <div>
        <BreadCrumb title="Add Child Menu" />
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
              <label htmlFor="">Child Menu Name</label> <br />
              <input
                type="text"
                name="title"
                required
                onChange={(e) => setTitle(e.target.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="">Status</label> <br />
              <select
                name="isActive"
                onChange={(e) => setStatus(e.target.value)}
                id="isActive"
              >
                <option value="">-- Select --</option>
                <option value="true">Active</option>
                <option value="false">In-Active</option>
              </select>
            </div>
            <div>
              <input
                type="hidden"
                name="parentId"
                value={id}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Order"
              />
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

export default ChildMenu;
