import React from "react";
import { Link } from "react-router-dom"
import "./App.css"

function NavBar(props){
    const { user, setUser } = props
    
    function signUserOut(){
        localStorage.clear()
        setUser(null)
    }
return(
    <div className="sum">
        <div className="title">
        <a href="/">Footy Forum</a>
        </div>
        
            <nav className="item">
        <ul className="ul">
            { user ? <li><Link to="/createpost">Create Post</Link></li> : null}
            { user ? <li><Link to="/account">Account</Link></li> : null}
            {user ? null : <li><Link to="/login">Log In</Link></li>}
            { user ? null : <li><Link to="/signup">Sign Up</Link></li> }
            {user ? <li onClick={signUserOut}><Link to="/">Sign Out</Link></li>: null }
        </ul>
    </nav>
    </div>
)
}

export default NavBar;