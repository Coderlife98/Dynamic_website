import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Base_url } from "../constant/constant";
const Header = () => {
  const [navLink, setNavLink] = useState([]);
  const getMenu = async () => {
    try {
      const response = await axios.get(`${Base_url}menu/get`);
      console.log(navLink);
      setNavLink(response.data.menu);
    } catch (error) {}
  };
  useEffect(() => {
    getMenu();
  }, []);
  return (
    <div>
      <div className="bg-black py-4 px-8">
        <div className="flex items-center justify-between">
          <div>
            <img src="" alt="logo" />
          </div>
          <ul className="text-white lg:flex gap-4">
            {navLink
              .filter((item) => item.parentId === null)
              .map((item) => (
                <li key={item._id}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
