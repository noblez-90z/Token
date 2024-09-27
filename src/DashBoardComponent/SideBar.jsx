import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const toggleAccountMenu = () => {
    setIsAccountOpen(!isAccountOpen);
  };
  return (
    <aside className="w-64 bg-[#025951] text-white h-[100vh] p-4">
      <h1 className="text-2xl font-semibold mb-6">Token Generator</h1>
      <ul>
        <li className="mb-4">
          <Link to="/DashBoard" className="text-lg">
            Dashboard Home
          </Link>
        </li>
        <li className="mb-4">
          <a href="#">Token Generation</a>
        </li>
        <li className="mb-4">
          <a href="#" className="text-lg font-semibold">
            Payment History
          </a>
        </li>
        <li className="mb-4">
          <button
            onClick={toggleAccountMenu}
            className="flex justify-between items-center w-full text-lg focus:outline-none"
          >
            Account Management
            <span className="material-icons">
              {isAccountOpen ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </span>
          </button>
          {isAccountOpen && (
            <ul className="mt-2 pl-4">
              <li className="mb-2">
                <Link to="/Profile" className="text-base">
                  Profile Settings
                </Link>
              </li>
              <li>
                <Link to="/Security" className="text-base">
                  Security Settings
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="mb-4">
          <Link to="/Support" className="text-lg">
            Support
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
