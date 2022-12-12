import React from "react";
import EachPost from "./EachPost";

function PostHolder(props){
    
    const singlePost = {
        id: 1,
        title: "this is my title",
        post: "this si my post",
        username: 'brooknega21',
        avatar: '',
        votes: 32
    }
    const secondPost = {
        id: 2,
        title: "this is my second title",
        post: "this si my second post",
        username: 'kingbrook101',
        avatar: '',
        votes: 12
    }

    const posts = [singlePost, secondPost]

    const renderPosts = posts.map((post) =>
        <EachPost 
        key={post.id}
        post={post}
        />
    )
    return(
        <div>
            {renderPosts}
        </div>
    )
}

export default PostHolder;