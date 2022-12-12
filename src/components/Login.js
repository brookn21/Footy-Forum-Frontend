import React, { useState } from "react";

function Login(){
    const [ username, setUsername] = useState("")
    const [ password, setPassword] = useState("")

    function submitUser(e){
        e.preventDefault()
        fetch( "http://localhost:3000/login", {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify({
              username,
              password
            })
          })
          .then( r => r.json())
          .then( user => {
              localStorage.uid = user.uid
              setUsername("")
          setPassword("")
           })
          .catch(err => console.log(err))
    }

    function signUserOut(){
        localStorage.clear()
    }
    // console.log(localStorage.uid)
    return(
        <div>
            <form onSubmit={submitUser}>
            <label>Username: </label>
            <input type="text" 
            id="usernmae" 
            name="username" 
            value={username}
            onChange= {e => setUsername(e.target.value)}/>
            <br/>
            <label>Password: </label>
            <input type="password" id="password" name="password" value={password}
            onChange= {e => setPassword(e.target.value)}/>
            <br/>
            <input type="submit" value="Submit"/>
            </form>
            <button onClick={signUserOut}>Sign Out</button>

        </div>
    )
}

export default Login;