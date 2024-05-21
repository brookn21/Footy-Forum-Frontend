import React, { useState, useEffect } from "react";
import EachPost from "./EachPost";
import CommunityMenu from "./CommunityMenu";
import HomeSearch from "./HomeSearch";

function PostHolder(props){

    const { user } = props
    const [posts, setPosts] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:3000/posts')
        .then(r => r.json())
        .then( postList => setPosts(postList))
  }, []
  )

    const renderPosts = posts.map((post) =>
        <EachPost 
        key={post.id}
        post={post}
        user={user}
        />
    )

    return(
        <div>
            <CommunityMenu/>
            {/* <HomeSearch/> */}
            <h1 className="homeHeader">Top Posts</h1>
            {renderPosts}
        </div>
    )
}

export default PostHolder;