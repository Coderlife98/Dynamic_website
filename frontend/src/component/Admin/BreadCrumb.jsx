import React from "react";
import { Link } from "react-router-dom";
import { SiSlashdot } from "react-icons/si";
const BreadCrumb = ({ title }) => {
  return (
    <div>
      <div className="w-full px-4 py-3 border border-slate-700">
        <div className="flex items-center justify-end">
          <Link to="/dashboard" className="text-white">
            Home
          </Link>
          <span className="text-slate-500 px-2">&#47;</span>
          <span className="text-slate-300">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
