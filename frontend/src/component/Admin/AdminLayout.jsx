import React from "react";
import { Outlet } from "react-router-dom";
import Header_Admin from "./Header_Admin";
import Footer_Admin from "./Footer_Admin";
import Leftbar from "./Leftbar";
import { useSelector } from "react-redux";

const AdminLayout = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  return (
    <div className="flex flex-col min-h-screen">
      <Header_Admin />
      <div className="flex flex-1">
        <Leftbar />
        <main
          className={` mt-14 pb-14 min-h-[calc(100vh-56px)] bg-black w-full p-4 overflow-auto ${isOpen ? "ml-56" : "ml-0"}`}
        >
          <Outlet />
        </main>
      </div>
      <Footer_Admin />
    </div>
  );
};

export default AdminLayout;
