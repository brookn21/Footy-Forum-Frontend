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
    image: { avatar: true, src: "https://images.metadata.sky.com/pd-image/d73ee590-ff46-492e-bea6-0620a3e0569f/16-9" },
  }
];

function CreatePost(props){
    const { user, setUserPosts, userPosts } = props
    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
    const [body, setBody] = useState("");
    const [community, setCommunity] = useState(0);
    const navigate = useNavigate()

    const newPost = {
        title: title,
        img: img,
        body: body,
        user_id: user?.id,
        community_id: 4,
    };
    // community
    //  user?.id

  
  //   const pracPost = {
  //     title: "Practice post 2",
  //     body:"This is a practice post",
  //     user_id: 2,
  //     community_id: 1
  // }


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

    function checkSubmit(e){
      console.log(community)
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