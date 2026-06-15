import React from "react";
import { useNavigate } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/sidebarSlice";
const Header_Admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ++++++++++++++++++++++++ Handle Logout section start ++++++++++++++++++++++++++++
  const handleLogout = async () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  // ++++++++++++++++++++++++ Handle Logout section end ++++++++++++++++++++++++++++++++

  return (
    <div className="bg-red-400 md:py-2 py-4 fixed top-0 px-6 w-full">
      <div className="flex justify-between">
        <div className="flex items-center w-full md:w-48 justify-between">
          <div>
            <img src="" alt="logo" />
          </div>
          <div>
            <RiMenu3Fill
              onClick={() => dispatch(toggleSidebar())}
              className="text-xl cursor-pointer"
            />
          </div>
        </div>
        <div className="hidden md:block">
          <button
            onClick={handleLogout}
            className="bg-black px-6 py-2 rounded-full text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header_Admin;
