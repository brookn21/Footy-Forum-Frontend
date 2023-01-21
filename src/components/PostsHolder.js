import React from "react";
import EachPost from "./EachPost";

function PostHolder(props){
    
    const singlePost = {
        id: 1,
        title: "Ronaldo is washed",
        post: 'What must it be to have striven for a World Cup title your entire career, only to know now that the best chance of it happening is probably if you stay on the sidelineWhat must it be to have striven for a World Cup title your entire career, only to know now that the best chance of it happening is probably if you stay on the sidelineWhat must it be to have striven for a World Cup title your entire career, only to know now that the best chance of it happening is probably if you stay on the sidelineWhat must it be to have striven for a World Cup title your entire career, only to know now that the best chance of it happening is probably if you stay on the sidelineWhat must it be to have striven for a World Cup title your entire career, only to know now that the best chance of it happening is probably if you stay on the sidelineWhat must it be to have striven for a World Cup title your entire career, only to know now that the best chance of it happening is probably if you stay on the sidelineWhat must it be to have striven for a World Cup title your entire career, only to know now that the best chance of it happening is probably if you stay on the sidelineWhat must it be to have striven for a World Cup title your entire career, only to know now that the best chance of it happening is probably if you stay on the sidelineWhat must it be to have striven for a World Cup title your entire career, only to know now that the best chance of it happening is probably if you stay on the sidelineWhat must it be to have striven for a World Cup title your entire career, only to know now that the best chance of it happening is probably if you stay on the sidelineWhat must it be to have striven for a World Cup title your entire career, only to know now that the best chance of it happening is probably if you stay on the sideline',
        username: 'brooknega21',
        avatar: '',
        votes: 32,
        community:"PremierLeague",
        img: 'https://ca-times.brightspotcdn.com/dims4/default/2ab664e/2147483647/strip/true/crop/3240x2160+248+0/resize/840x560!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F83%2F25%2Ffb07c1084456bd206892b72be971%2Fwcup-portugal-soccer-13004.jpg'
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