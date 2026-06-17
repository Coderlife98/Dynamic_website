import React, { useEffect, useState } from "react";
import BreadCrumb from "../../component/Admin/BreadCrumb";
import axios from "axios";
import { Base_url } from "../../constant/constant";
import { MdDelete, MdEditDocument } from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";
import { RiMenuFold2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
const Menu = () => {
  const [menuList, setMenuList] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const getMenu = async () => {
    try {
      const url = await axios.get(`${Base_url}menu/get`);
      setMenuList(url.data.menu);
    } catch (error) {}
  };

  const handleUpdate = async (e) => {
    try {
      e.preventDefault();
      const updateName = await axios.post(
        `${Base_url}menu/editMenu/${selectedItem._id}`,
        selectedItem,
      );
      setShowPopup(false);
      getMenu();
    } catch (error) {
      console.log(error);
      setShowPopup(false);
    }
  };

  const handleDelete = async (data) => {
    try {
      const confirmDelete = window.confirm("Are You Sure");
      if (!confirmDelete) return;
      const response = await axios.post(
        `${Base_url}menu/deleteMenu/${data._id}`,
      );
      if (response) {
        getMenu();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ++++++++++++++++ Add Title Tag start +++++++++++++++++++++++++++
  useEffect(() => {
    document.title = "Menu Bar";
  }, []);
  // ++++++++++++++++ Add Title Tag end ++++++++++++++++++++++++++++++

  useEffect(() => {
    getMenu();
  }, []);
  return (
    <div>
      <BreadCrumb title="Menu" />
      <div className="text-end">
        <Link
          to="/dashboard/add_menu"
          className="text-white inline-block mt-3 bg-indigo-500 py-2 px-4"
        >
          Add Menu +
        </Link>
      </div>
      <div className="text-white mt-2  md:py-4   px-2">
        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
          <table className="w-full text-nowrap text-sm text-left rtl:text-right text-body">
            <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
              <tr>
                <th scope="col" className="px-6 py-3 font-medium">
                  S.no
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Menu
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Order
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Categories
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Path
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {menuList.map((items, index) => (
                <tr
                  className="bg-neutral-primary border-b border-default"
                  key={index}
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{items.title}</td>
                  <td className="px-6 py-4">{items.order}</td>
                  <td className="px-6 py-4">
                    {items.parentId == null ? "Parent" : "Child"}
                  </td>
                  <td className="px-6 py-4">{items.path}</td>
                  <td className="px-6 py-4">
                    {items.isActive ? "Active" : "Inactive"}
                  </td>
                  <td className="px-6 flex items-center py-4">
                    <Link
                      onClick={() => {
                        handleDelete(items);
                      }}
                    >
                      <MdDelete
                        title="Delete Menu"
                        className="text-xl  mx-1 text-red-500"
                      />
                    </Link>
                    <Link
                      onClick={() => {
                        setSelectedItem(items);
                        setShowPopup(true);
                      }}
                    >
                      <MdEditDocument
                        title="Edit Menu"
                        className="text-xl  mx-1 text-blue-500"
                      />
                    </Link>
                    <Link to={`${items._id}`}>
                      <IoNewspaper
                        title="Open Page"
                        className="text-xl mx-1  text-yellow-500"
                      />
                    </Link>
                    {items.parentId == null && (
                      <Link to={`/dashboard/child_menu/${items._id}`}>
                        <RiMenuFold2Line
                          title="child Menu"
                          className="text-xl mx-1  text-yellow-500"
                        />
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* +++++++++++++++++++++++ Popup Condition start  ++++++++++++++ */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="bg-white p-5 rounded-md h-56 w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl border-b-black border-b pb-1">Edit Menu</h2>
            <div>
              <input
                type="text"
                className="border border-slate-500 mt-4 focus:outline-none w-full px-2 py-1"
                value={selectedItem?.title || ""}
                onChange={(e) =>
                  setSelectedItem({ ...selectedItem, title: e.target.value })
                }
              />
            </div>
            {selectedItem?.parentId == null && (
              <div>
                <input
                  type="text"
                  className="border border-slate-500 mt-4 focus:outline-none w-full px-2 py-1"
                  value={selectedItem?.order || ""}
                  onChange={(e) =>
                    setSelectedItem({ ...selectedItem, order: e.target.value })
                  }
                />
              </div>
            )}

            <button
              className="bg-indigo-500 inline-block mt-2 w-full py-2 text-white"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </div>
      )}
      {/* +++++++++++++++++++++++ Popup Condition end ++++++++++++++++++ */}
    </div>
  );
};

export default Menu;
