import React, { useState } from "react";
import { Card, Form, Button, Image } from "semantic-ui-react";
import { useParams, useNavigate } from "react-router-dom";



function EditAccount(props){
    const { user } = props
    // let { id } = useParams();
  const navigate = useNavigate();
  const [yo, setYo] = useState("aksndkjasn")
  const [username, setUsername] = useState(user.username)
  const [ img, setImg ] = useState(user.img)
  const [ bio, setBio ] = useState(user.bio)
    return(
    <div className="editForm">
      <Card className="cardForm">
      <br/>
      <Image
        src={img ? img : "https://www.asiamediajournal.com/wp-content/uploads/2022/11/Default-PFP.jpg"}
        //"https://64.media.tumblr.com/12b25d2c7a9e9e35c7b03589c0fbf279/767a1d0bd18112f0-81/s500x750/747db7c3a6f430b09b60ba0b31e86014550f89f5.png"
        size="medium"
        circular
        className="userImage"
      />
      <br/>
        <Form reply>
          <Form.Input
            fluid
            label="Img Url"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
          <Form.Input
            fluid
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.TextArea
            label="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <Button content="Submit" labelPosition="left" icon="check" primary />
        </Form>
        <Form reply>
          <Button
            content="Delete"
            labelPosition="left"
            icon="trash alternate icon"
            color="red"
          />
        </Form>
      </Card>
    </div>
    )
}

export default EditAccount;