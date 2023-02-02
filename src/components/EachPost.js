import React, { useState } from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom"

function EachPost(props) {
  const { post, user } = props;
  const [liked, setLiked] = useState(false)

  const userLiked =post?.likes.find(like => like.user_id === user?.id)

  // userLiked ? setLiked(true) : setLiked(false) 


  // console.log(liked)

  function createLike(){
    console.log("hi")
    setLiked(!liked)
  }

  function deleteLike(){
    console.log("bye")
    setLiked(!liked)
  }

  return (
    <div className="cardHolder">
      {/* <div class="ui fluid card"> */}
      <div class="ui centered card">
        <Card>
          <Image src={post?.img ? post?.img : null} wrapped ui={false} />
          {/* </div> */}
          <Card.Content>
            <Card.Header>{post?.title} </Card.Header>
            <Card.Meta>{post?.user.username}</Card.Meta>
            <Card.Meta>ff/{post?.community.name}</Card.Meta>
            <div class="center aligned description">
              <Card.Description>{post?.body}</Card.Description>
            </div>
          </Card.Content>
          <Card.Content extra>
          {/* {liked ? console.log("hi") : console.log("hasdsadi")} */}
          {/* onClick={createLike} */}
              <div class="ui labeled button" >
              <div  onClick={userLiked ? deleteLike : createLike} class={userLiked || liked ? "ui red button" :"ui button"}>
                <i class="heart icon"></i> Like
              </div>
              <a class={userLiked ? "ui basic red left pointing label" : "ui basic left pointing label"}>{post.likes?.length}</a>
            </div> 
            <Link to= {`/post/` + post?.id}class="navLink">
            <div class="ui left labeled button" tabindex="0">
              <a class="ui basic right pointing label">{post.comments?.length}</a>
              <div class="ui button">Comments</div>
            </div>
            </Link>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}

export default EachPost;
