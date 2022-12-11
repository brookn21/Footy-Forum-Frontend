import React, { useState, useEffect} from 'react';
import HomePage from './HomePage';
import NavBar from "./NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Communities from './Communities';
import Account from './Account';
import Notifications from './Notifications';
import 'semantic-ui-css/semantic.min.css'

const loginUrl = "http://localhost:3000/login"

function App() {

  useEffect(()=>{
    if (localStorage.uid)
    console.log("User found:", localStorage.uid)
    else
    console.log("No user found")
  }, [])

  fetch( loginUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      email: 'brook@gmail.com',
      password: '12345_Bb'
    })
  })
  .then( r => r.json())
  .then( user => localStorage.uid = user.uid)
  return (
      <div>
            <NavBar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/notifications" element={<Notifications/>}/>
                <Route path="/communities" element={<Communities/>}/>
                <Route path="/account" element={<Account/>}/>
            </Routes>
        </div>
  );
}

export default App;
