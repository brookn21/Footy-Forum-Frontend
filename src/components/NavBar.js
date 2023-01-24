import React from "react";
import { Link } from "react-router-dom"
import "./App.css"

function NavBar(){
return(
    <div className="sum">
        <div className="title">
        <a href="/">Fake Reddit</a>
        </div>
            <nav className="item">
        <ul className="ul">
            <li><Link to="/notifications">Notifications</Link></li>
            <li><Link to="/communities">Communities</Link></li>
            <li><Link to="/account">Account</Link></li>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
        </ul>
    </nav>
    </div>
)
}

export default NavBar;