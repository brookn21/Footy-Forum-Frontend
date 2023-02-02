import React, { useState, useEffect } from "react";
import { Card, Image, Comment, Header, Form, Button } from "semantic-ui-react";
import {useParams, useNavigate} from "react-router-dom";
import Comments from './Comments';

function ClickedPost(props) {
    let { id } = useParams()
    const navigate = useNavigate()
    const { user } = props;
    const [ post, setPost] = useState({})
    const [ comments, setComments] = useState([post])
    const [ body, setBody] = useState("")
    
    
    const postUrl = 'http://localhost:3000/posts/' + id
    
    useEffect(()=>{
        fetch(postUrl)
        .then(r => r.json())
        .then( (postInfo) => {
            setPost(postInfo)
        setComments(postInfo.comments)
        }
        )
    }, []
    )
        
        // setComments(post?.comments)

    const renderComments = comments?.map((comment) =>
        <Comments comment ={comment}
        key={comment.id}
        user={user}/>
    )

    const newComment = {
        user_id: user?.id,
        post_id: post.id,
        body
    }


    function createComment(e){
    e.preventDefault();
          fetch("http://localhost:3000/comments", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newComment),
          })
            .then((r) => r.json())
            .then((addComment) => setComments([...comments, addComment]))
            navigate(``)
            setBody("")
    }
    return (
      <div className="cardHolder">
        <div class="ui centered card">
          <Card>
            <Image src={post?.img ? post?.img : null} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{post?.title} </Card.Header>
              <Card.Meta>{post?.user?.username}</Card.Meta>
              <Card.Meta>ff/{post?.community?.name}</Card.Meta>
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
                <a class="ui basic red left pointing label">{post?.votes}</a>
              </div>
              <div class="ui left labeled button" tabindex="0">
                <a class="ui basic right pointing label">{comments?.length}</a>
                <div class="ui button">Comments</div>
              </div>
            </Card.Content>
            {/* <Comment.Group> */}
        {/* <Header as="h3" dividing>
          Comments
        </Header> */}
        <h3>Comments</h3>
        {/* </Comment.Group> */}
            {user ?
                <Form reply onSubmit={createComment}>
      <Form.TextArea onChange={e => setBody(e.target.value)} value={body}/>
      <Button content='Add Comment' labelPosition='left' icon='edit' primary />
    </Form> 
    :
    null}
          </Card>
          {renderComments}
        </div>
      </div>
    );
  }

  export default ClickedPost;
