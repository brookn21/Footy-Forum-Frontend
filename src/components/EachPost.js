import React from "react";
import { Card } from 'semantic-ui-react'


function EachPost(props){

    const { post } = props
    return(
        <div className="homePosts">
        <Card
        header= {post.title}
        description = {post.post}
        meta = {post.username}
        />
        </div>
        // <div>
        //     <h3>{post.title}</h3>
        //     <h5>{post.username}</h5>
        //     <p>{post.post}</p>
        // </div>
    )
}

export default EachPost;
