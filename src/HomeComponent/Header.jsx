import { Link } from "react-router-dom";
import menu from "../assets/menu.svg";
import cancelMenu from "../assets/cancel menu.svg";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../UserComponent/userSlice";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const handleMenuOpen = () => { //this works fine in opening and closing of the nav bar menu
  //   setMenuOpen(!menuOpen);
  // };
  const [menuIcon, setMenuIcon] = useState(menu);
  const menuChange = () => {
    //this work well in changing the menu to  cancel menu and also to open and close the nav bar
    setMenuIcon(menuIcon === menu ? cancelMenu : menu);

    setMenuOpen(!menuOpen);
  };

  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <div className="border-b border-[#055555] bg-[#e5eeee]  relative h-[80px] px-2 w-full  flex items-center justify-between capitalize font-bold text-xl">
      <div>
        {isAuthenticated ? (
          <h2 className="italic">
            Welcome, {user.name} {user.surname}
          </h2>
        ) : (
          <div className=" italic">
            <h2>hello user</h2>
            <h2 className="font-thin text-sm">
              Please log in or sign up to continue
            </h2>
          </div>
        )}
      </div>

      <div
        // onClick={handleMenuOpen}
        className="block md:hidden  absolute right-2 top-6"
      >
        {/* <svg
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
        </svg> */}
        <img src={menuIcon} alt="menu" onClick={menuChange} />
      </div>

      <div
        className={`absolute top-[80px] right-0 md:top-2 md:h-[50px] md:right-2   w-full md:w-fit block md:flex items-center ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <nav>
          <div className="list-none block md:flex gap-6 items-center w-full px-2 py-6 capitalize bg-[#e5eeee]  ">
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
        {menuOpen && (
          <div
            onClick={menuChange}
            className={`fixed   right-0 h-svh w-full insect-0 bg-black bg-opacity-20 z-50`}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Header;

// "h-svh  bg-black md:bg-none bg-opacity-75 md:opacity-0  transform transition-transform duration-300 ease-in-out
