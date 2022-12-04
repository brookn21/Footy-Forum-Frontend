import React from 'react';
import HomePage from './HomePage';
import NavBar from "./NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Communities from './Communities';
import Account from './Account';
import Notifications from './Notifications';
import 'semantic-ui-css/semantic.min.css'


function App() {
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
