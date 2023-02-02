import React, { useState, useEffect} from "react";
import { Image, Button } from 'semantic-ui-react'
import {useParams} from "react-router-dom";
import CommunityUsers from "./CommunityUsers"
import CommunityPosts from "./CommunityPosts"


function Community(props){
    const { user } = props
    let { id } = useParams()
    const [ change, setChange] = useState(true)
    const [ community, setCommunity ] = useState({})
    const [ show, setShow ] = useState(true)
    const [ join, setJoin ] = useState(false)


    const clickedCom = 'http://localhost:3000/communities/' + id

    useEffect(()=>{
        fetch(clickedCom)
        .then(r => r.json())
        .then( com => setCommunity(com))
  }, []
  )

  const posts = community?.posts
  const users = community?.users

  const renderPosts = posts?.map((post)=>
        <CommunityPosts post ={post}
        key = {post.id}/>
    )
    const renderUsers = users?.map((user) =><CommunityUsers user={user} key={user.id}/>)

    function changeShow(){
        setShow(!show)
    }

    function changeJoin(){
        setJoin(!join)
    }


    return(
        <div>
            <div className="wrapperHeader">
            <img
            className="header"
            src={community?.img}
            alt="Ligue 1 logo"/>
            </div>
            <div className="centerText">
            <h1 className="leagueName">ff/{community?.name}</h1>
            { user ? 
                (user?.communities.find(e => e.name === community?.name) || join) ?
                <button class="negative ui button" onClick={changeJoin}>Leave Community :(</button> 
                : <button class="positive ui button" onClick={changeJoin}>Join Community!</button> 
            : null
            }
            <p>{community?.bio}</p>
            </div>
            <div class="ui two item menu">
        {show ? <a class="item active">Posts</a> : <a class="item" onClick={changeShow}>Posts</a>}
        {show ?<a class="item" onClick={changeShow}>Members</a> : <a class="item active">Members</a> }
    </div>  
    <div>{show ? renderPosts : renderUsers}</div>
        </div>
    )
}

export default Community;