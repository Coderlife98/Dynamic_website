import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiMenu3Fill, RiLogoutCircleRLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/sidebarSlice";
import toast from "react-hot-toast";
import axios from "axios";
import { Base_url } from "../../constant/constant";
const Header_Admin = () => {
  const [logo, setLogo] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ++++++++++++++++++++++++ Handle Logout section start ++++++++++++++++++++++++++++
  const handleLogout = async () => {
    localStorage.removeItem("token");
    toast.success("Logout Successfully");
    navigate("/");
  };
  // ++++++++++++++++++++++++ Handle Logout section end ++++++++++++++++++++++++++++++++

  const getLogo = async () => {
    try {
      const response = await axios.get(`${Base_url}company/getLogo`);
      setLogo(response.data.data.logo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLogo();
  }, []);
  return (
    <div className="bg-gradient-to-t from-[#031B43] to-[#081A3C] border-b-1 z-20 border-slate-500 md:py-2 py-4 fixed top-0 px-6 w-full">
      <div className="flex justify-between">
        <div className="flex items-center w-full md:w-48 justify-between">
          <Link to="/dashboard">
            <img
              src={
                logo
                  ? `${Base_url.replace("/api", "")}${logo.replace(/\\/g, "/")}`
                  : ""
              }
              className="w-12"
              alt="logo"
            />
          </Link>
          <div>
            <RiMenu3Fill
              onClick={() => dispatch(toggleSidebar())}
              className="text-xl text-white cursor-pointer"
            />
          </div>
        </div>
        <div className="hidden md:block">
          <button
            onClick={handleLogout}
            title="Logout"
            className="h-10 w-10 flex items-center cursor-pointer justify-center rounded-full text-white"
          >
            <RiLogoutCircleRLine className="text-white text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header_Admin;
