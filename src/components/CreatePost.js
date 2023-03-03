import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const leagues = [ 
    {
    id:1,
    key: 'Premier League',
    text: 'Premier League',
    value: 'Premier League',
    image: { avatar: true, src: 'https://www.pngkey.com/png/full/340-3408257_premier-league-logo-premier-league-logo-png.png' },
  },
  {
    id:5,
    key: 'La Liga',
    text: 'La Liga',
    value: 'La Liga',
    image: { avatar: true, src: 'https://iscreativestudio.com/wp-content/uploads/2016/08/logotipos4.jpg' },
  },
  {
    id:4,
    key: 'Serie A',
    text: 'Serie A',
    value: 'Serie A',
    image: { avatar: true, src: 'https://www.aia-figc.it/media/news/20494/serie%20A.jpg' },
  },
  {
    id:3,
    key: 'Bundesliga',
    text: 'Bundesliga',
    value: 'Bundesliga',
    image: { avatar: true, src: 'https://www.betfootball.com/wp-content/uploads/2021/10/6ba318474e4cab7cef32a965fd6b982c.png' },
  },
  {
    id:2,
    key: 'Ligue 1',
    text: 'Ligue 1',
    value: 'Ligue 1',
    image: { avatar: true, src: 'data:image/png;base64,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' },
  }
];

function CreatePost(props){
    const { user, setUserPosts, userPosts } = props
    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [body, setBody] = useState("");
    const [community, setCommunity] = useState("");
    const navigate = useNavigate()

    const newPost = {
        title,
        img,
        body,
        user_id: user?.id,
        community_id: community,
    };
  
    function createPost(e) {
      e.preventDefault();
      fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      })
        .then((r) => r.json())
        .then((addedPost) => {
          setUserPosts(...userPosts,addedPost)
          navigate("/")
        })
        // 
        setTitle("")
        setImg("")
        setBody("")
        setCommunity("")
    }

    function changeLeague(e){
        const comm = leagues.find(league => league.value === e.target.innerText);
        setCommunity(comm.id)
    }
    return(
        <div>
            <Form onSubmit={createPost}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
          <Form.Input fluid label='Img url' value={img} onChange={(e)=>setImg(e.target.value)}/>
          <br/>
          <Form.Select
            fluid
            label='League'
            placeholder='Choose A League'
            options={leagues}
            onChange={changeLeague}
          />
        </Form.Group>
        <Form.TextArea label='Post' 
        value={body} 
        onChange={(e)=>setBody(e.target.value)}/>
        {/* <Form.Checkbox label='I agree to the Terms and Conditions' /> */}
        <Form.Button>Submit</Form.Button>
      </Form>
        </div>
    )
}

export default CreatePost;