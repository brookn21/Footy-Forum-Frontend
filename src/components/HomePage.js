import React from "react";
import PostHolder from "./PostsHolder";

function HomePage(props){
    const singlePost = {
        title: "this is my title",
        post: "this si my post",
        username: 'brooknega21',
        avatar: '',
        votes: 32
    }
    const secondPost = {
        title: "this is my second title",
        post: "this si my second post",
        username: 'kingbrook101',
        avatar: '',
        votes: 12
    }

    const posts = [singlePost, secondPost]
    return(
    <div>
        <PostHolder posts ={posts}/>
    </div>
    )
}

export default HomePage;