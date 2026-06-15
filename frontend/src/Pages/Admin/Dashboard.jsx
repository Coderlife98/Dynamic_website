import React, { useEffect } from "react";
import BreadCrumb from "../../component/Admin/BreadCrumb";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);
  return (
    <div>
      <BreadCrumb title="Dashboard" />
    </div>
  );
};

export default Dashboard;
