import React from "react";
import { Link } from "react-router-dom"
import "./App.css"

function NavBar(){
return(
    <nav className="nav">
        <a href="/" className="title">Fake Reddit</a>
        <ul>
            <li><Link to="/notifications">Notifications</Link></li>
            <li><Link to="/communities">Communities</Link></li>
            <li><Link to="/account">Account</Link></li>
        </ul>
    </nav>
)
}

export default NavBar;