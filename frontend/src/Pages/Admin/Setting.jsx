import React, { useEffect } from "react";
import BreadCrumb from "../../component/Admin/BreadCrumb";

const Setting = () => {
  useEffect(() => {
    document.title = "Setting";
  }, []);
  return (
    <div className="">
      <BreadCrumb title="Setting" />
      <div className="mt-4  md:py-4   px-2 border border-slate-800  text-white">
        <div className="md:px-4">
          <h2 className=" text-xl font-semibold border-b border-slate-800 pb-2 md:text-2xl mb-4">
            Company Setting
          </h2>
        </div>
        <form method="post" className="md:px-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-x-6 md:gap-y-4 lg:grid-cols-3">
            <div>
              <label htmlFor="">Company Name</label> <br />
              <input
                type="text"
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Company Name"
              />
            </div>
            <div>
              <label htmlFor="">Mobile No</label> <br />
              <input
                type="text"
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Mobile No"
              />
            </div>
            <div>
              <label htmlFor="">Email</label> <br />
              <input
                type="text"
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="">Address</label> <br />
              <input
                type="text"
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Address"
              />
            </div>
            <div>
              <label htmlFor="">Facebook Id</label> <br />
              <input
                type="text"
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Facebook Id"
              />
            </div>
            <div>
              <label htmlFor="">Twitter Id</label> <br />
              <input
                type="text"
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Twitter Id"
              />
            </div>
            <div>
              <label htmlFor="">Instagram Id</label> <br />
              <input
                type="text"
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Instagram Id"
              />
            </div>
            <div>
              <label htmlFor="">Linkedin Id</label> <br />
              <input
                type="text"
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Linkedin Id"
              />
            </div>
            <div>
              <label htmlFor="">Youtube Link</label> <br />
              <input
                type="text"
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Youtube Link"
              />
            </div>
          </div>
          <div>
            <button className="bg-indigo-500 mt-5 py-2 rounded-sm w-full">
              Update
            </button>
          </div>
        </form>
      </div>

      {/* +++++++++++++++++++++ Second Form +++++++++++++++++++++ */}

      <div className="mt-4  md:py-4   px-2 border border-slate-800  text-white">
        <div className="md:px-4">
          <h2 className=" text-xl font-semibold border-b border-slate-800 pb-2 md:text-2xl mb-4">
            Images Setting
          </h2>
        </div>
        <form method="post" className="md:px-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-x-6 md:gap-y-4 ">
            <div>
              <label htmlFor="">Logo</label> <br />
              <input
                type="file"
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Company Name"
              />
            </div>
            <div>
              <label htmlFor="">Favicon</label> <br />
              <input
                type="file"
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Mobile No"
              />
            </div>
          </div>
          <div>
            <button className="bg-indigo-500 mt-5 py-2 rounded-sm w-full">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Setting;
