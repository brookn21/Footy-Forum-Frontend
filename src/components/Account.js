import React, { useState } from "react";
import { Image } from "semantic-ui-react";
import UserPosts from "./UserPosts";
import UserComms from './UserComms'
import { Link } from "react-router-dom"


function Account(props) {
  const { user } = props;
  const [ show, setShow ] = useState(true)

  function changeShow(){
      setShow(!show)
  }

  const posts = user?.posts
  const communities = user?.communities

  const renderPosts = posts?.map((post)=>
        <UserPosts post ={post}
        key = {post.id}/>
    )
    const renderCommunities = communities?.map((community) =>
        <UserComms community ={community}
        key={community.id}/>
    )

  return (
    <div>
      {/* <h1>Account</h1> */}
      <br/>
    <Link to={`/accountEdit/`}><button class="ui blue button">Edit</button></Link>
      <Image
        src={user?.img ? user.img : "https://www.asiamediajournal.com/wp-content/uploads/2022/11/Default-PFP.jpg"}
        //"https://64.media.tumblr.com/12b25d2c7a9e9e35c7b03589c0fbf279/767a1d0bd18112f0-81/s500x750/747db7c3a6f430b09b60ba0b31e86014550f89f5.png"
        size="medium"
        circular
        className="userImage"
      />
      <h3 className="username">{user?.username}</h3>
      <p className="bio">Yo this is my bio hello nice to meet you! Hello ksadlsnkdnlsankd Yo this is my bio hello nice to meet you! Hello ksadlsnkdnlsankd Yo this is my bio hello nice to meet you! Hello ksadlsnkdnlsankd Yo this is my bio hello nice to meet you! Hello ksadlsnkdnlsankd Yo this is my bio hello nice to meet you! Hello ksadlsnkdnlsankdYo this is my bio hello nice to meet you! Hello ksadlsnkdnlsankdYo this is my bio hello nice to meet you! Hello ksadlsnkdnlsankdYo this is my bio hello nice to meet you! Hello ksadlsnkdnlsankd </p>
    <div class="ui two item menu">
    {show ? <a class="item active">Posts</a> : <a class="item" onClick={changeShow}>Posts</a>}
        {show ?<a class="item" onClick={changeShow}>Communities</a> : <a class="item active">Communities</a> }
    </div>  
    <div>{show ? renderPosts: renderCommunities}</div>
    </div>
  );
}

export default Account;
