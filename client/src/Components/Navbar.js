import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                  [ Blog ] 
        </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="https://gaurav24072002.github.io/">
                                Home 
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/post">
                                Posts
              </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add-post">
                                Add Post
              </Link>
                        </li>
                        <li style={{position:'absolute', right:'50px'}} className="nav-item">
                            <Link className="nav-link" to="/">
                                Sign out
              </Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
