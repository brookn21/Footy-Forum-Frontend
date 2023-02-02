import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom"


function UserPosts(props) {
    const { post } = props;

    console.log(post)
    return (
      <div className="cardHolder">
        {/* <div class="ui fluid card"> */}
        <div class="ui centered card">
          <Card>
            <Image src={post?.img ? post?.img : null} wrapped ui={false} />
            {/* </div> */}
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
              {/* <div class="ui labeled button">
                <div class="ui red button">
                  <i class="heart icon"></i> Like
                </div>
                <a class="ui basic red left pointing label">2</a>
              </div> */}
              {/* {post.likes.length} */}
              {/* <div class="ui left labeled button" tabindex="0">
                <a class="ui basic right pointing label">2,048</a>
                <div class="ui button">Comments</div>
              </div> */}
              <Link to={`/editPost/` + post?.id}><button class="ui inverted blue button">Edit</button></Link>
            </Card.Content>
          </Card>
        </div>
      </div>
    );
  }

  export default UserPosts;