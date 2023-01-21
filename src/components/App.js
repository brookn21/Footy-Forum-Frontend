import React, { useState, useEffect} from 'react';
import PostHolder from './PostsHolder';
import NavBar from "./NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Communities from './Communities';
import Account from './Account';
import Login from './Login'
import Notifications from './Notifications';
import 'semantic-ui-css/semantic.min.css'
import Signin from './Signup';

const updateUrl = "http://localhost:3000/profile"

function App() {

  const [ user, setUser ] = useState(null)

  useEffect(()=>{
    if (localStorage.uid)
      fetch(updateUrl,{
        method: 'POST',
        headers: { 
          'content-type': 'application/json',
          'Authenticate': localStorage.uid}
      })
      .then(r => r.json())
      .then( userInfo => setUser(userInfo))
    else
    console.log("No user found")
  }, [])

  return (
      <div>
            <NavBar/>
            <Routes>
                <Route path="/" element={<PostHolder/>}/>
                <Route path="/notifications" element={<Notifications/>}/>
                <Route path="/communities" element={<Communities/>}/>
                <Route path="/signup" element={<Signin/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/account" element={<Account setUser={setUser}/>}/>
            </Routes>
        </div>
  );
}

export default App;
