import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useMenuContext } from "../contexts/MenuContext";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import PhotoDisplay from "../components/PhotoDisplay/PhotoDisplay";
import "../styles/Dashboard.css";
const Dashboard = () => {
  const { authUser, setIsLoggedIn, setAuthUser } = useAuth();
  const { activeMenu } = useMenuContext();
  const [mainContentWidth, setMainContentWidth] =
    useState("calc(100%-288px)"); // Initial width calculation
  useEffect(() => {
    setIsLoggedIn(true);
    setAuthUser("Jazib");
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (activeMenu) {
        const calculatedWidth = `calc(${windowWidth}px - 288px)`;
        setMainContentWidth(calculatedWidth);
      } else {
        const calculatedWidth = `calc(${windowWidth}px)`;
        setMainContentWidth(calculatedWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = () => {
    setAuthUser(null);
    setIsLoggedIn(false);
    window.location.href = "./home";
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <Sidebar />
      </div>
      {/* Rightbar*/}
      <div
        className={activeMenu ? "main" : "main main-expanded"}
        style={{ width: mainContentWidth }}
      >
        {/* Navbar */}
        <div className="navbar">
          <Navbar username={authUser} handleLogout={handleLogout} />
        </div>
        <div className="photo__display">
          <PhotoDisplay></PhotoDisplay>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
