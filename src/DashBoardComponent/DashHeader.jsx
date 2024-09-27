import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const DashHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  //   const user = useSelector((state) => state.user);
  const { isAuthenticated, user } = useSelector((state) => state.user);

  // Function to extract initials from the user's name and surname
  const getInitials = () => {
    if (!user || !user.name || !user.surname) return "";

    const nameInitial = user.name.charAt(0).toUpperCase();
    const surnameInitial = user.surname.charAt(0).toUpperCase();

    return `${nameInitial}${surnameInitial}`;
  };

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="">
        <h2 className="text-2xl font-bold text-[#025951]">Dashboard</h2>
        {isAuthenticated ? (
          <p className="italic">
            welcome,
            <span className="pl-2">
              {user.name} {user.surname}{" "}
            </span>
          </p>
        ) : (
          <p></p>
        )}
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative">
          <span className="material-icons">
            <FontAwesomeIcon icon={faBell} />
          </span>
        </button>
        {/* <div className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center">
          <span className="text-sm">U</span>
        </div> */}

        <div className="relative">
          <div
            className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <span className="text-sm"> {getInitials()}</span>
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashHeader;
