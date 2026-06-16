import React, { useEffect, useState } from "react";
import BreadCrumb from "../../component/Admin/BreadCrumb";
import axios from "axios";
import { Base_url } from "../../constant/constant";
import { MdDelete, MdEditDocument } from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";
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

  const handleUpdate = async () => {
    try {
    } catch (error) {}
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
      <div className="text-white mt-4  md:py-4   px-2">
        <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
          <table class="w-full text-sm text-left rtl:text-right text-body">
            <thead class="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
              <tr>
                <th scope="col" class="px-6 py-3 font-medium">
                  S.no
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Menu
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Path
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Status
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {menuList.map((items, index) => (
                <tr
                  class="bg-neutral-primary border-b border-default"
                  key={index}
                >
                  <td class="px-6 py-4">{index + 1}</td>
                  <td class="px-6 py-4">{items.title}</td>
                  <td class="px-6 py-4">{items.path}</td>
                  <td class="px-6 py-4">
                    {items.isActive ? "Active" : "Inactive"}
                  </td>
                  <td class="px-6 flex items-center py-4">
                    <Link to={`${items._id}`}>
                      <MdDelete className="text-xl  mx-1 text-red-500" />
                    </Link>
                    <Link
                      onClick={() => {
                        setSelectedItem(items);
                        setShowPopup(true);
                      }}
                    >
                      <MdEditDocument className="text-xl  mx-1 text-blue-500" />
                    </Link>
                    <Link to={`${items._id}`}>
                      <IoNewspaper className="text-xl mx-1  text-yellow-500" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* +++++++++++++++++++++++ Popup Condition start  ++++++++++++++ */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-5 rounded-md">
            <h2 className="text-xl">Edit Menu</h2>
            <input
              type="text"
              value={selectedItem?.title || ""}
              onChange={(e) =>
                setSelectedItem({ ...selectedItem, title: e.target.value })
              }
            />
            <button className="" onClick={handleUpdate}>
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
