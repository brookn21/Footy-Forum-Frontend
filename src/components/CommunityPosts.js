import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom"

function CommunityPosts(props) {
    const { post } = props;
    return (
      <div className="cardHolder">
        <div class="ui centered card">
          <Card>
            <Image src={post?.img ? post?.img : null} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{post?.title} </Card.Header>
              {/* <Card.Meta>{post?.user.username}</Card.Meta> */}
              {/* <Card.Meta>/{post?.community.name}</Card.Meta> */}
              <div class="center aligned description">
                <Card.Description>{post?.body}</Card.Description>
              </div>
            </Card.Content>
            <Card.Content extra>
              {/* <Icon name='user' />
      {post.votes} */}
              <div class="ui labeled button">
                <div class="ui red button">
                  <i class="heart icon"></i> Like
                </div>
                <a class="ui basic red left pointing label">{post.likes.length}</a>
              </div>
              <Link to= {`/post/` + post?.id}class="navLink">
              <div class="ui left labeled button" tabindex="0">
                <a class="ui basic right pointing label">{post.comments.length}</a>
                <div class="ui button">Comments</div>
              </div>
              </Link>
              {/* <button class="ui inverted blue button">Edit</button> */}
            </Card.Content>
          </Card>
        </div>
      </div>
    );
  }

  export default CommunityPosts;