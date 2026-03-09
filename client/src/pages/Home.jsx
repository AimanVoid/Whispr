import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home(){
    return (
        <div className="home-container">

            <div className="home-card">

                <h1 className="home-title">
                  <b>Say it anonymously.</b>
                </h1>

                <p className="home-subtitle">
                    Send and receive anonymous messages from anyone
                </p>

                <div className="home-buttons">

                    <Link to="/signup">
                        <button className="primary-btn">
                            Create Account
                        </button>
                    </Link>

                    <Link to="/login">
                        <button className="secondary-btn">
                            Login
                        </button>
                    </Link>

                </div>

            </div>

        </div>
    )
}