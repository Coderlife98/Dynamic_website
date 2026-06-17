import React, { useRef, useState } from "react";
import BreadCrumb from "../../component/Admin/BreadCrumb";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Base_url } from "../../constant/constant";
import toast from "react-hot-toast";

const Team = () => {
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [youtube, setYoutube] = useState("");
  const [linkdin, setLinkdin] = useState("");
  const formRef = useRef();
  const { id } = useParams();
  const handleTeam = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("name", name);
      formData.append("menuId", id);
      formData.append("status", status);
      formData.append("designation", designation);
      formData.append("facebook", facebook);
      formData.append("instagram", instagram);
      formData.append("twitter", twitter);
      formData.append("linkdin", linkdin);
      formData.append("youtube", youtube);
      const response = await axios.post(`${Base_url}team/Team/add`, formData);
      if (response) {
        setStatus("");
        setName("");
        setDesignation("");
        setFacebook("");
        setInstagram("");
        setTwitter("");
        setYoutube("");
        setLinkdin("");
        setImage(null);
        formRef.current.reset();
        // toast.success(response.data.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <BreadCrumb title="Team" />
      <div className="mt-4  md:py-4   px-2 border border-slate-800  text-white">
        <div className="md:px-4">
          <h2 className=" text-xl font-semibold border-b border-slate-800 pb-2 md:text-2xl mb-4">
            Add Team Member
          </h2>
        </div>
        <form ref={formRef} onSubmit={handleTeam} className="md:px-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-x-6 md:gap-y-4 ">
            <input type="hidden" name="menuId" />

            <div>
              <label htmlFor="">Image</label> <br />
              <input
                type="file"
                name="image"
                required
                onChange={(e) => setImage(e.target.files[0])}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Title"
              />
            </div>
            <div>
              <label htmlFor="">Name</label> <br />
              <input
                type="text"
                name="name"
                required
                onChange={(e) => setName(e.target.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Title"
              />
            </div>
            <div>
              <label htmlFor="">Designation</label> <br />
              <input
                type="text"
                name="designation"
                onChange={(e) => setDesignation(e.target.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Description"
              />
            </div>
            <div>
              <label htmlFor="">Facebook</label> <br />
              <input
                type="text"
                name="facebook"
                onChange={(e) => setFacebook(e.target.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Description"
              />
            </div>
            <div>
              <label htmlFor="">Instagram</label> <br />
              <input
                type="text"
                name="instagram"
                onChange={(e) => setInstagram(e.target.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Description"
              />
            </div>
            <div>
              <label htmlFor="">Twitter</label> <br />
              <input
                type="text"
                name="twitter"
                onChange={(e) => setTwitter(e.target.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Description"
              />
            </div>
            <div>
              <label htmlFor="">Youtube</label> <br />
              <input
                type="text"
                name="youtube"
                onChange={(e) => setYoutube(e.target.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Description"
              />
            </div>
            <div>
              <label htmlFor="">Linkdin</label> <br />
              <input
                type="text"
                name="linkdin"
                onChange={(e) => setLinkdin(e.target.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Enter Description"
              />
            </div>
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

export default Team;
