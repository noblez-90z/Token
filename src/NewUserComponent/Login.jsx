import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./userSlice";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, token } = useSelector((state) => state.newUser);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(login({ email, password })).unwrap();
    console.log("Signup response:", result);

    // if (result) {
    //   console.log("Verification code sent!");
    //   // navigate("/verify");
    // } else {
    //   console.error("Unexpected result structure:", result);
    // }
    console.log(result);

    if (result.status === true) {
      navigate("/"); // Redirect to home page
    }
    if (!result) {
      return error;
    }
  };

  return (
    <div className="bg-[#ebf2f2] flex justify-center items-center w-full h-svh">
      <div className="block rounded-lg shadow-lg w-full md:w-[60%]  bg-white">
        <h1 className="py-3 text-center font-bold text-xl">Login</h1>
        <div className="px-6">
          <form onSubmit={handleSubmit}>
            <div className="py-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="border-2 w-full rounded-md px-2 py-2 outline-none"
              />
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="border-2 w-full rounded-md px-2 py-2 outline-none"
            />
            <p className="py-2 text-right font-bold text-[#005555]">
              <Link to="/ForgetPassword" className="capitalize">
                forgot password?
              </Link>
            </p>
            {error && (
              <div className="w-full text-red-500 font-medium text-center">
                <p>{error}</p>
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="bg-[#025951] text-white block px-3 py-2 mx-auto  w-full md:w-[60%] my-6 rounded-lg font-bold"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          {/* {error && ( if i use this den on the userSlice for login the catch error can be 'error.response.data' the will only display error perstemding to payload action 
              <div>
                <p>{error.message}</p>
              </div>
            )} */}
        </div>
      </div>
      {loading && (
        <div className="absolute top-0 w-full">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Login;
