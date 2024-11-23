import React from "react";
import "../styles/sidebaradm.css";
import { IoHomeSharp } from "react-icons/io5";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { RiUserSharedFill } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
const SidebarAdm = () => {
  return (
    <>
      <div className="sidebar-adm-container">
        <div className="sidebar-adm-options">
          <ul>
            <li>
              <a href="#">
                <IoHomeSharp />
              </a>
            </li>
            <li>
              <a href="#">
                <HiOutlineBuildingStorefront />
              </a>
            </li>
            <li>
              <a href="#">
                <RiUserSharedFill />
              </a>
            </li>
          </ul>
        </div>

        <div className="sidebar-adm-logout">
          <ul>
            <li>
              <a href="#">
                <FaRegUserCircle />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarAdm;
