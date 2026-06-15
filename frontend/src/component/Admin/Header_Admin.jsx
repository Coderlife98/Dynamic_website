import React from "react";
import { useNavigate } from "react-router-dom";
const Header_Admin = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    localStorage.removeItem("token");
    navigate("/");
    // localStorage.clear();
  };
  return (
    <div className="bg-red-400 py-2 fixed top-0 px-6 w-full">
      <div className="flex justify-between">
        <div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
        <div>
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
