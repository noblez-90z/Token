// components/LoginForm.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./userSlice";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login({ email, password }));
    if (!isAuthenticated) {
      alert("Login failed! Please check your credentials.");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="bg-[#ebf2f2] flex justify-center items-center w-full h-svh">
      <div className="block rounded-lg shadow-lg w-full md:w-[60%]  bg-white ">
        <h2 className="py-3 text-center font-bold text-xl">Login</h2>
        <div className=" px-6">
          <div className="py-6">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 w-full rounded-md px-2 py-2 outline-none"
            />
          </div>
          <div className="">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 w-full rounded-md px-2 py-2 outline-none"
            />
          </div>
          <p className="py-2 text-right font-bold text-[#005555]">
            <Link to="/PasswordReset" className="capitalize">
              forgot password?
            </Link>
          </p>
          <button
            className="bg-[#025951] text-white block px-3 py-2 mx-auto  w-full md:w-[60%] my-6 rounded-lg font-bold"
            onClick={handleLogin}
          >
            Login
          </button>
          <p className="w-full text-right py-4 capitalize">
            don't have an account?{" "}
            <span className="text-blue-600">
              <Link to="/signUp"> sign up</Link>
            </span>{" "}
          </p>
          {isAuthenticated && (
            <p>
              Welcome, {user.name} {user.surname}!
            </p>
          )}
          <p className="capitalize text-center py-3">
            return to
            <Link className="pl-2 text-blue-600 capitalize" to="/">
              HomePage
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
