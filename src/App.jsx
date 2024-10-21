import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomeComponent/HomePage";
// import SignUpForm from "./UserComponent/SignUp";
// import LoginForm from "./UserComponent/Login";
import Prize from "./HomeComponent/Prize";
import Documentation from "./HomeComponent/Documentation";
import DashBoard from "./DashBoardComponent/DashBoard";
import Profile from "./DashBoardComponent/Profile";
import Security from "./DashBoardComponent/Security";
import Support from "./DashBoardComponent/Support";
import About from "./HomeComponent/About";
// import PasswordReset from "./HomeComponent/PasswordReset";
// import EmailVerfication from "./HomeComponent/EmailVerfication";
import SignUp from "./NewUserComponent/SignUp";
import Login from "./NewUserComponent/Login";
import Verify from "./NewUserComponent/Verify";
import ProtectedRoute from "./NewUserComponent/ProtectedRoute";
import ForgotPassword from "./NewUserComponent/ForgetPassword";
import ResetPassword from "./NewUserComponent/ResetPassword";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/signUp" element={<SignUpForm />} />
          <Route path="/Login" element={<LoginForm />} /> */}
          <Route
            path="/Prize"
            element={
              <ProtectedRoute>
                <Prize />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Documentation"
            element={
              <ProtectedRoute>
                <Documentation />
              </ProtectedRoute>
            }
          />
          <Route
            path="/DashBoard"
            element={
              <ProtectedRoute>
                {" "}
                <DashBoard />
              </ProtectedRoute>
            }
          />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Security" element={<Security />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/About" element={<About />} />
          {/* <Route path="/PasswordReset" element={<PasswordReset />} /> */}
          {/* <Route path="/EmailVerfication" element={<EmailVerfication />} /> */}
          <Route path="/verify" element={<Verify />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ForgetPassword" element={<ForgotPassword />} />
          <Route path="/ResetPasswor" element={<ResetPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
