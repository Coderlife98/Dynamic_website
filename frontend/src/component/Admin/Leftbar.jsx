import React from "react";
import { useSelector } from "react-redux";

const Leftbar = () => {
  // ++++++++++++++++++++++++++ Handle Toggle state ./+++++++++++++++++++++++++++++
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  // ++++++++++++++++++++++++++ Handle Toggle state ./ +++++++++++++++++++++++++++++
  return (
    <div
      className={`bg-green-600 fixed top-14 transition-all duration-300 left-0 h-[calc(100vh-56px)] pt-5 pb-12 overflow-y-auto ${isOpen ? "w-56" : "w-0 px-0"}`}
    >
      <div> Leftbar</div>
      <div> Leftbar</div>
      <div> Leftbar</div>
      <div> Leftbar</div>
      <div> Leftbar</div>
      <div> Leftbar</div>
      <div> Leftbar</div>
      <div> Leftbar</div>
      <div> Leftbar</div>
      <div> Leftbar</div>
      <div> Leftbar</div>
      <div> Leftbar</div>
      <div> Leftbar</div>
      <div> Leftbar</div>
      <div> Leftbar</div>
      <div> Leftbar</div>
      <div> Leftbar</div>
      <div> Leftbar</div>
      <div> Leftbar</div>
      <div> Leftbar</div>
      <div> Leftbar</div>
      <div> Leftbar</div>
      <div> Leftbar</div>
      <div> sunny</div>
    </div>
  );
};

export default Leftbar;
