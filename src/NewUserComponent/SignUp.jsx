import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendVerificationCode } from "./userSlice";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
// import TestEndPoint from "./TestEndPoint";

const SignUp = () => {
  const [username, setUserName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.newUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(
        sendVerificationCode({ email, password, username, companyname, phone })
      ).unwrap();
      console.log("Signup response:", response);
      console.log("seinup mail:", response);
      if (response) {
        console.log("Verification code sent!");
        navigate("/verify");
      } else {
        console.error("Unexpected response structure:", response);
      }
    } catch (error) {
      console.error("signup error:", error);
    }

    // console.log(result);
    // if (sendVerificationCode.fulfilled.match(result)) {
    //   navigate("/verify"); //Redirect to verification page
    // }
  };

  return (
    <div className="flex justify-center items-center bg-[#ebf2f2]">
      <div className="bg-white shadow-lg rounded-lg w-full md:w-[70%]  my-24">
        <h1 className="py-3 text-center font-bold text-xl">Sign Up</h1>
        <div className="px-6">
          <form onSubmit={handleSubmit}>
            <div className="py-3 mt-5">
              <input
                type="text"
                name="userName"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="UserName"
                className="border-2 w-full rounded-md px-2 py-2 outline-none"
              />
            </div>
            <div className="py-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="border-2 w-full rounded-md px-2 py-2 outline-none"
              />
            </div>
            <div className="py-3">
              <input
                type="text"
                name="companyName"
                value={companyname}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="enter company name"
                className="border-2 w-full rounded-md px-2 py-2 outline-none"
              />
            </div>
            <div className="py-3">
              <input
                type="number"
                name="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="enter phone no."
                className="border-2 w-full rounded-md px-2 py-2 outline-none"
              />
            </div>
            <div className="py-3">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="border-2 w-full rounded-md px-2 py-2 outline-none"
              />
            </div>
            {error && (
              <div className="w-full text-red-500 font-medium text-center">
                <p>{error}</p>
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="bg-[#025951] text-white block px-3 py-2 mx-auto my-6 w-full md:w-[60%]  rounded-lg font-bold"
            >
              {loading ? "Signing up..." : "Sign Up"}
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
          </form>
        </div>
      </div>
      {loading && (
        <div className="absolute top-0 w-full">
          <Loading />
        </div>
      )}
      {/* <TestEndPoint /> */}
    </div>
  );
};

export default SignUp;
