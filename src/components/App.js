import React, { useState, useEffect} from 'react';
import PostHolder from './PostsHolder';
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom"
import Account from './Account';
import Login from './Login'
import Notifications from './Notifications';
import 'semantic-ui-css/semantic.min.css'
import Signin from './Signup';
import Community from './Community';
import CreatePost from './CreatePost';
import ClickedPost from './ClickedPost';
import EditPost from './EditPost';
import EditAccount from './EditAccount';

const updateUrl = "http://localhost:3000/profile"

function App() {

  const [ user, setUser ] = useState(null)
  const [ userPosts, setUserPosts] = useState([])
  

  useEffect(()=>{
    if (localStorage.uid)
      fetch(updateUrl,{
        method: 'POST',
        headers: { 
          'content-type': 'application/json',
          'Authenticate': localStorage.uid}
      })
      .then(r => r.json())
      .then( (userInfo) => {
        setUser(userInfo)
        setUserPosts(userInfo.posts)
      }
      )
      
  }, [])

  return (
      <div>
            <NavBar user = {user} setUser = {setUser}/>
            <Routes>
                <Route path="/" element={<PostHolder user={user}/>}/>
                <Route path="/notifications" element={<Notifications/>}/>
                <Route path="/signup" element={<Signin setUser={setUser}/>}/>
                <Route path="/createpost" element={<CreatePost user = {user} userPosts={userPosts} setUserPosts={setUserPosts}/>}/>
                <Route path="/login" element={<Login setUser={setUser}/>}/>
                <Route path="/account" element={<Account user={user} posts={userPosts}/>}/>
                <Route path="/post/:id"element={<ClickedPost user={user}/>}/>
                <Route path="/editPost/:id"element={<EditPost setUserPosts= {setUserPosts} userPosts={userPosts}/>}/>
                <Route path="/accountEdit"element={<EditAccount user={user}/>}/>
                <Route path="/community/:id" element={<Community user={user}/>}/>
            </Routes>
        </div>
  );
}

export default App;
