import React, { useState } from "react";
import { Form, Segment, Button, Message, Grid, Header} from 'semantic-ui-react'
import { Link } from "react-router-dom"



function Signup(){
    return(
        <div>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Create your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input placeholder='First Name' />
          <Form.Input placeholder='Last Name' />
          <Form.Input placeholder='Username' />
          <Form.Input placeholder='E-mail address' />
          <Form.Input
            fluid
            placeholder='Password'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        Already have an account? <Link to="/login"><a href='#'>Log-In</a></Link>
      </Message>
    </Grid.Column>
  </Grid>
        </div>
    )
}

export default Signup;