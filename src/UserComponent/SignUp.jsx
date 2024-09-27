// components/SignUpForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "./userSlice";
import { Link, useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = () => {
    const newUser = { name, surname, email, password };
    dispatch(signUp(newUser)); // Dispatch sign-up action with user details
    alert("Sign-up successful! You can now log in.");
    navigate("/Login");
  };

  return (
    <div className="flex justify-center items-center bg-[#ebf2f2]">
      <div className="bg-white shadow-lg rounded-lg w-full md:w-[70%]  my-24">
        <h2 className="py-3 text-center font-bold text-xl">Sign Up</h2>
        <div className=" px-6">
          <div className="py-3 mt-5">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 w-full rounded-md px-2 py-2 outline-none"
            />
          </div>
          <div className="py-3">
            <input
              type="text"
              placeholder="Surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className="border-2 w-full rounded-md px-2 py-2 outline-none"
            />
          </div>
          <div className="py-3">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 w-full rounded-md px-2 py-2 outline-none"
            />
          </div>
          <div className="py-3">
            <input
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 w-full rounded-md px-2 py-2 outline-none"
            />
          </div>
          <button
            className="bg-[#025951] text-white block px-3 py-2 mx-auto my-6 w-[50%]  rounded-full font-bold"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <p className="w-full text-right py-3 capitalize">
            already have an account?{" "}
            <span className="text-blue-600">
              <Link to="/Login"> login</Link>
            </span>{" "}
          </p>
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

export default SignUpForm;
