import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "./auth/firebase";
//import { query, collection, getDocs, where } from "firebase/firestore";

import { Outlet, Link } from "react-router-dom";
import "./pages/style.css";

function Dashboard() {
  const [user, loading] = useAuthState(auth);
 
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
 
  }, [user, loading]);
  return (
    <>
    <nav > 
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Appcv">New Resume</Link>
        </li>
        <li>
          <Link to="/Aboutus">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li><button className="dashboard__btn" onClick={logout}>
        Logout
       </button></li>
      </ul>
      
    </nav>

    <Outlet />
  </>
    
    
         
  );
}
export default Dashboard;