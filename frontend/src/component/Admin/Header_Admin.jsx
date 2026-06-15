import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiMenu3Fill, RiLogoutCircleRLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/sidebarSlice";
import toast from "react-hot-toast";
const Header_Admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ++++++++++++++++++++++++ Handle Logout section start ++++++++++++++++++++++++++++
  const handleLogout = async () => {
    localStorage.removeItem("token");
    toast.success("Logout Successfully");
    navigate("/");
  };
  // ++++++++++++++++++++++++ Handle Logout section end ++++++++++++++++++++++++++++++++

  return (
    <div className="bg-gradient-to-t from-[#031B43] to-[#081A3C] border-b-1 z-20 border-slate-500 md:py-2 py-4 fixed top-0 px-6 w-full">
      <div className="flex justify-between">
        <div className="flex items-center w-full md:w-48 justify-between">
          <Link to="/dashboard">
            <img
              src="https://camwel.com/assets/images/camwel_logo.png"
              className="w-20"
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
