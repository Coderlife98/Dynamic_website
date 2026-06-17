import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Base_url } from "../constant/constant";
const Header = () => {
  const [navLink, setNavLink] = useState([]);
  const getMenu = async () => {
    try {
      const response = await axios.get(`${Base_url}menu/get`);

      const sortedMenu = response.data.menu.sort(
        (a, b) => Number(a.order) - Number(b.order),
      );
      setNavLink(sortedMenu);
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
              .map((parent) => {
                const children = navLink.filter(
                  (item) => item.parentId === parent._id,
                );

                return (
                  <li key={parent._id} className="relative group">
                    <Link to={parent.path}>{parent.title}</Link>
                    {children.length > 0 && (
                      <ul className="absolute hidden group-hover:block bg-black p-2">
                        {children.map((child) => (
                          <li key={child._id}>
                            <Link to={child.path}>{child.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
