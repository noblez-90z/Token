import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../UserComponent/userSlice";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <div className="shadow-md bg-[#e5eeee] relative h-[80px] px-2 w-full  flex items-center justify-between capitalize font-bold text-xl">
      <div>
        {isAuthenticated ? (
          <h2 className="italic">
            Welcome, {user.name} {user.surname}
          </h2>
        ) : (
          <div className=" italic">
            <h2>hello user</h2>
            <h2 className="font-thin">Please log in or sign up to continue</h2>
          </div>
        )}
      </div>

      <div className="block md:hidden border absolute right-2 top-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="16"
          viewBox="0 0 30 16"
          fill="currentColor"
          onClick={handleMenuOpen}
        >
          <rect width="30" height="1.5"></rect>
          <rect y="7" width="20" height="1.5"></rect>
          <rect y="14" width="30" height="1.5"></rect>
        </svg>
      </div>

      <div
        className={`absolute top-24 right-0 md:top-2 md:h-[50px] md:right-2  px-2 w-full md:w-fit block md:flex items-center ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <nav>
          <div className="list-none block md:flex gap-6 items-center capitalize  ">
            <li className="py-2 md:py-0">
              <Link to="/">Home</Link>
            </li>
            <li className="py-2 md:py-0">
              <Link to="/Prize">price</Link>
            </li>
            <li className="py-2 md:py-0">
              <Link to="/Documentation">documentation</Link>
            </li>
            {isAuthenticated ? (
              <div className="block md:flex items-center gap-4 md:ml-5 text-center mt-8 md:mt-0">
                <li className="py-2 md:py-0">
                  <Link to="/DashBoard">Dashboard</Link>
                </li>
                <li
                  className="py-2 md:py-3 px-6 my-3 bg-[#025951] text-white font-semibold rounded-lg"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </li>
              </div>
            ) : (
              <div className="block md:flex items-center gap-4 md:ml-5 text-center mt-8 md:mt-0 ">
                <li className="py-2 md:py-0 font-semibold">
                  <Link to="/Login">Login</Link>
                </li>
                <li className=" py-2 px-6 md:py-2  my-3 font-semibold bg-[#025951] text-white rounded-lg">
                  <Link to="/signUp">Sign Up</Link>
                </li>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
