import React from "react";

function EachPost(props){

    const { post } = props
    return(
        <div>
            <h3>{post.title}</h3>
            <h5>{post.username}</h5>
            <p>{post.post}</p>
        </div>
    )
}

export default EachPost;