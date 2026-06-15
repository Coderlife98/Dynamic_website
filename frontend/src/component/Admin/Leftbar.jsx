import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { BiSolidFoodMenu } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
const Leftbar = () => {
  // ++++++++++++++++++++++++++ Handle Toggle state ./+++++++++++++++++++++++++++++
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  // ++++++++++++++++++++++++++ Handle Toggle state ./ +++++++++++++++++++++++++++++
  return (
    <div
      className={`bg-gradient-to-t from-[#031B43] to-[#081A3C] fixed top-14 transition-all duration-300 left-0 h-[calc(100vh-56px)] pt-5 pb-12 overflow-y-auto ${isOpen ? "w-56 px-6" : "w-0 px-0"}`}
    >
      <ul className="">
        <Link className="text-white flex items-center">
          <MdDashboard />
          <li className="pl-2">Dashboard</li>
        </Link>
        <Link className="text-white my-4 flex items-center ">
          <BiSolidFoodMenu />
          <li className="pl-2">Menu</li>
        </Link>
        <Link
          to="/dashboard/setting"
          className="text-white  flex items-center "
        >
          <IoSettingsSharp />
          <li className="pl-2">Setting</li>
        </Link>
      </ul>
    </div>
  );
};

export default Leftbar;
