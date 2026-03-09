import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(){

    const [menuOpen,setMenuOpen] = useState(false);
    const location = useLocation();

    return(

        <nav className="navbar">

            {/* LOGO */}

            <div className="logo">
                <Link to="/">Whispr</Link>
            </div>


            {/* HAMBURGER */}

            <div 
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={()=>setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>


            {/* LINKS */}

            <div className={`nav-links ${menuOpen ? "open" : ""}`}>

                <Link 
                to="/" 
                className={location.pathname === "/" ? "active" : ""}
                >
                Home
                </Link>

                <Link 
                to="/signup"
                className={location.pathname === "/signup" ? "active" : ""}
                >
                Signup
                </Link>

                <Link 
                to="/login"
                className={`login-btn ${location.pathname === "/login" ? "active-btn" : ""}`}
                >
                Login
                </Link>

            </div>

        </nav>

    )
}