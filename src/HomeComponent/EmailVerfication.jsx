import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmailVerfication = () => {
  const navigate = useNavigate();

  const [code, setCode] = useState(new Array(6).fill(""));
  const inputRef = useRef([]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const updatedCode = [
      ...code.map((d, idx) => (idx === index ? element.value : d)),
    ];
    setCode(updatedCode);

    if (index < 5 && element.value) {
      inputRef.current[index + 1].focus();
    } else if (index === 5 && element.value) {
      handleSumit();
    }
  };

  const handleSumit = (e) => {
    if (e) e.preventDefault();
    const verificationCode = code.join("");
    console.log("verification code:", verificationCode);
    navigate("/Login");
  };

  const handleKeyUp = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
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
            <form action="" onSubmit={handleSumit}>
              {code.map((digit, index) => (
                <input
                  name=""
                  type="text"
                  key={index}
                  value={digit}
                  maxLength="1"
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyUp={(e) => handleKeyUp(e, index)}
                  ref={(el) => (inputRef.current[index] = el)}
                  className="border w-[40px] h-[40px] m-[5px] text-center font-semibold rounded-md"
                  required
                />
              ))}
            </form>
          </div>
          <p className="py-2 ">
            didn't get the code?
            <Link className="capitalize text-blue-500 pl-2">resend it</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerfication;
