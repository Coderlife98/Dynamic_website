import React, { useEffect, useState } from "react";
import BreadCrumb from "../../component/Admin/BreadCrumb";
import axios from "axios";
import { Base_url } from "../../constant/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Add_Menu = () => {
  const [loading, setLoading] = useState();
  const [title, setTitle] = useState();
  const [order, setOrder] = useState();
  const [menuList, setMenuList] = useState([]);
  const navigate = useNavigate();
  const handleMenu = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const getMenu = await axios.get(`${Base_url}menu/get`);
      //   setMenuList(getMenu.data.menu);
      const menus = getMenu.data.menu;

      const isExist = menus.find((menus) => menuList.title === title);
      const isOrder = menus.find(
        (menus) => Number(menus.order) === Number(order),
      );

      if (isExist) {
        toast.error("Menu Already Exist !!");
      } else if (isOrder) {
        toast.error("Menu Order Already Exist !!");
      } else {
        const path = "/" + title.toLowerCase().replace(/\s+/g, "");
        const data = {
          title,
          order,
          path,
        };
        const createMenu = await axios.post(`${Base_url}menu/create`, data);
        if (createMenu) {
          toast.success("Menu Created !!");
          navigate("/dashboard/menu");
        }
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("");
    }
  };

  useEffect(() => {
    document.title = " Add Menu || Dashboard ";
  }, []);
  return (
    <div>
      <div>
        <BreadCrumb title="Add Menu" />
      </div>
      <div className="mt-4  md:py-4   px-2 border border-slate-800  text-white">
        <div className="md:px-4">
          <h2 className=" text-xl font-semibold border-b border-slate-800 pb-2 md:text-2xl mb-4">
            Add
          </h2>
        </div>
        <form onSubmit={handleMenu} className="md:px-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-x-6 md:gap-y-4 ">
            <div>
              <label htmlFor="">Name</label> <br />
              <input
                type="text"
                name="title"
                required
                onChange={(e) => setTitle(e.target.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="">Order</label> <br />
              <input
                type="text"
                name="order"
                required
                onChange={(e) => setOrder(e.target.value)}
                className="border border-slate-500 mt-1 focus:outline-none w-full px-2 py-1"
                placeholder="Order"
              />
            </div>
          </div>
          <div>
            <button
              disabled={loading}
              className="bg-indigo-500 mt-5 py-2 cursor-pointer rounded-sm w-full"
            >
              {loading ? "Updating ..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add_Menu;
