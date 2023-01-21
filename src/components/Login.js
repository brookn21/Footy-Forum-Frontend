import React, { useState } from "react";
import { Form, Segment, Button, Message, Grid, Header} from 'semantic-ui-react'
import { Link } from "react-router-dom"


function Login(){
    const [ username, setUsername] = useState("")
    const [ password, setPassword] = useState("")

    function submitUser(e){
        e.preventDefault()
        fetch( "http://localhost:3000/login", {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify({
              username,
              password
            })
          })
          .then( r => r.json())
          .then( user => {
              localStorage.uid = user.uid
              setUsername("")
          setPassword("")
           })
          .catch(err => console.log(err))
    }

    // console.log(localStorage.uid)
    return(
        <div>
          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='green' textAlign='center'>
      Log-in to your account
      </Header>
          <Form size='large' onSubmit={submitUser}>
        <Segment stacked>
          <Form.Input fluid icon='user' 
          iconPosition='left' 
          placeholder='Username' 
          value={username}
          onChange= {e => setUsername(e.target.value)}
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            value={password}
            onChange= {e => setPassword(e.target.value)}
          />

          <Button color='green' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <Link to="/signup"><a href='#'>Sign Up</a></Link>
      </Message>
      </Grid.Column>
  </Grid>
        </div>
    )
}

export default Login;
