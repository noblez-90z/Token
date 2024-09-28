import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomeComponent/HomePage";
import SignUpForm from "./UserComponent/SignUp";
import LoginForm from "./UserComponent/Login";
import Prize from "./HomeComponent/Prize";
import Documentation from "./HomeComponent/Documentation";
import DashBoard from "./DashBoardComponent/DashBoard";
import Profile from "./DashBoardComponent/Profile";
import Security from "./DashBoardComponent/Security";
import Support from "./DashBoardComponent/Support";
import About from "./HomeComponent/About";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signUp" element={<SignUpForm />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/Prize" element={<Prize />} />
          <Route path="/Documentation" element={<Documentation />} />
          <Route path="/DashBoard" element={<DashBoard />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Security" element={<Security />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
