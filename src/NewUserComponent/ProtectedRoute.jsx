import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.newUser.token); //for redux
  //const token = localStorage.getItem("token"); //for normal storage without redux
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      console.error("token no de here");
      navigate("/login");
    } else {
      // navigate("/login");
      console.log(token);
    }
  }, [token]);
  if (!token) {
    return null;
  }

  return children;
};
export default ProtectedRoute;
