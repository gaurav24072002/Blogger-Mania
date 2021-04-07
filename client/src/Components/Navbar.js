import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                  [ Blog-Mania ] 
        </Link>
        <div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div style={{display:'flex'}} class="bg-dark p-4">
    
                       
                            <a style={{color:'white'}} className="nav-link" href="https://gaurav24072002.github.io/">
                                Home 
                            </a>
                        
                        
                            <Link style={{color:'white'}} className="nav-link" to="/post">
                                Posts
              </Link>
                        
                        
                            <Link style={{color:'white'}} className="nav-link" to="/add-post">
                                Add Post
              </Link>
                        
                            <Link style={{color:'white'}} className="nav-link" to="/">
                                Sign out
              </Link>
                        
                        
                    
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>
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
