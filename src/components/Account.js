import React from "react";
import Login from './Login'

function Account(props){

    const { setUser } = props
    function signUserOut(){
        localStorage.clear()
        setUser(null)
    }

    return(
        <div>
        <h1>Account</h1>
        <button onClick={signUserOut}>Sign Out</button>
        </div>
    )
}

export default Account;