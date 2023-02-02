import React, { useState, useEffect } from "react";
import { Comment } from 'semantic-ui-react'


function Comments(props) {
    const { comment, user } = props
    const [sameUser, setSameUser] = useState(false)
    const [comUser, setComUser] = useState({})

    const commentUserUrl = 'http://localhost:3000/users/' + comment.user_id
    
        useEffect(()=>{
                fetch(commentUserUrl)
                .then(r => r.json())
                .then( userIfno => setComUser(userIfno))
          }, []
          )
          const d = new Date(comment.created_at)
        //   console.log(d)
  return (
    <div>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src={comUser?.img ? comUser.img : "https://www.asiamediajournal.com/wp-content/uploads/2022/11/Default-PFP.jpg" } />
          <Comment.Content>
            <Comment.Author as="a">{comUser?.username}</Comment.Author>
            {/* {comment.user?.username} */}
            <Comment.Metadata>
              <div>"s"</div>
            </Comment.Metadata>
            <Comment.Text>{comment?.body}</Comment.Text>
            {user?.id === comUser?.id ?
                <div className="trashButton">
            <i class="red trash alternate icon"></i>
            </div>
            : 
            null}
            {/* <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions> */}
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </div>
  );
}

export default Comments;
