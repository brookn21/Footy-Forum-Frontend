import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "semantic-ui-react";
import { useParams, useNavigate } from "react-router-dom";

function EditPost() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [body, setBody] = useState("");

  const postUrl = "http://localhost:3000/posts/" + id;

  useEffect(() => {
    fetch(postUrl)
      .then((r) => r.json())
      .then((postInfo) => {
        setBody(postInfo.body);
        setTitle(postInfo.title);
        setImg(postInfo.img);
      });
  }, []);

  const postData = {
    // body : body !== " " ? body : null
    body,
    title,
    img,
  };

  function editPostFetch(e) {
    e.preventDefault();
    fetch(postUrl, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((r) => r.json())
      .then((userPost) => console.log(userPost));
    navigate("/account");
    setTitle("");
    setImg("");
    setBody("");
  }

  function deletePost() {
    fetch(postUrl, {
      method: "DELETE",
    })
      .then((res) => res.josn())
      .then((res) => console.log(res));
    navigate("/account");
  }

  return (
    <div className="editForm">
      <Card className="cardForm">
        <Form reply onSubmit={editPostFetch}>
          <Form.Input
            fluid
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Input
            fluid
            label="Img Url"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
          <Form.TextArea
            label="Post"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <Button content="Submit" labelPosition="left" icon="check" primary />
        </Form>
        <Form reply onSubmit={deletePost}>
          <Button
            content="Delete"
            labelPosition="left"
            icon="trash alternate icon"
            color="red"
          />
        </Form>
      </Card>
    </div>
  );
}

export default EditPost;
