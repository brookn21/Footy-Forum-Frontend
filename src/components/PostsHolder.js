import React from "react";
import EachPost from "./EachPost";

function PostHolder(props){
    
    const { posts } = props

    const renderPosts = posts.map((post) =>
        <EachPost 
        key = {post.id}
        post ={post}
        />
    )
    return(
        <div>
            {renderPosts}
        </div>
    )
}

export default PostHolder;