import React from "react";
import { Outlet } from "react-router-dom";
import Header_Admin from "./Header_Admin";
import Footer_Admin from "./Footer_Admin";
import Leftbar from "./Leftbar";

const AdminLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header_Admin />
      <div className="flex flex-1">
        <Leftbar />
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
      <Footer_Admin />
    </div>
  );
};

export default AdminLayout;
