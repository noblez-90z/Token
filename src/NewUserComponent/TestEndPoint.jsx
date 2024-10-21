import axios from "axios";
import { useEffect } from "react";

const TestEndPoint = () => {
  const data = {
    email: "emmaroeneyoh@gmail.com",
    password: "098765",
  };
  useEffect(() => {
    axios
      .post("https://turnserver-vqwh.onrender.com/user/login", data, {
        header: {
          "Content-type": "application/json",
        },
      })
      .then((respone) => {
        console.log("respone:", respone.data);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  }, []);
  return <div className=""></div>;
};

export default TestEndPoint;
