import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyCode } from "./userSlice";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Verify = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRef = useRef([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { emailForVerification, loading, error } = useSelector(
    (state) => state.newUser
  );

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^\d?$/.test(value)) {
      const NewCode = [...code];
      NewCode[index] = value;
      setCode(NewCode);

      if (value && index < 3) {
        inputRef.current[index + 1].focus();
      }

      if (NewCode.every((digit) => digit !== "") && NewCode.length === 4) {
        console.log(NewCode);
        const comfirmcode = NewCode.join("");
        handleVerification(comfirmcode);
        handleSubmit();
      }
    }
  };
  const handleKeyUp = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };
  const handleVerification = async (comfirmcode) => {
    try {
      // const  = NewCode.toString();
      console.log(comfirmcode);

      const result = await dispatch(
        verifyCode({ email: emailForVerification, code: comfirmcode })
      );
      if (result.status === true) {
        //navigate("/login"); // Redirect to login page after successful verification
        console.log(result);
      }
      //console.log("Verification successful:", response.status);
      // Redirect to login page or home page
    } catch (error) {
      if (error.response) {
        console.error("Verification failed:", error.response.data.message);
      } else {
        console.error("Verification error:", error.message);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const result = await dispatch(verifyCode({ email: emailForVerification, code }));
    // if (verifyCode.fulfilled.match(result)) {
    //   navigate('/login'); // Redirect to login page after successful verification
    // }
    navigate("/Login");
  };

  return (
    <div className="flex justify-center items-center h-svh ">
      <div className="text-center h-svh  flex-1 py-8 px-4 bg-[#f2bb77] hidden md:block">
        <h2 className="font-semibold text-2xl py-2 mt-5 capitalize">
          let's get you started
        </h2>
        <p>Centralized health service and user balance to innovation</p>
      </div>
      <div className="h-svh  flex-1 flex py-8 px-4 md:px-5 justify-start items-center text-left capitalize">
        <div className="px-2 md:px-4">
          <h2 className="font-semibold py-2 text-xl text-[#74591f]">
            enter otp from email
          </h2>
          <p>please enter the code we sent to </p>
          <div className="my-4">
            <form onSubmit={handleSubmit}>
              {code.map((digit, index) => (
                <input
                  name=""
                  type="text"
                  key={index}
                  value={digit}
                  maxLength="1"
                  onChange={(e) => handleChange(e, index)}
                  onKeyUp={(e) => handleKeyUp(e, index)}
                  ref={(el) => (inputRef.current[index] = el)}
                  className="border w-[40px] h-[40px] m-[5px] text-center font-semibold rounded-md"
                  required
                />
              ))}
              {error && (
                <div className="w-full text-red-500 font-medium text-center">
                  <p>{error}</p>
                </div>
              )}
              <button type="submit" disabled={loading}>
                {loading ? "Verifying..." : ""}
              </button>
            </form>
            {/* {error && <p>{error}</p>} */}
          </div>
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

export default Verify;
