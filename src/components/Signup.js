import React, { useState } from "react";
import {
  Form,
  Segment,
  Button,
  Message,
  Grid,
  Header,
} from "semantic-ui-react";
import { Link, useNavigate} from "react-router-dom";

function Signup(props) {
  const { setUser } = props
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

  const newUser = {
    user: {
      first_name: firstName,
      last_name: lastName,
      password: password,
      username: username,
      email: email,
    },
  };

  function createAcc(e) {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((r) => r.json())
      .then((userinfo) => setUser(userinfo))
      navigate("/")
      setFirstName("")
      setLastName("")
      setUsername("")
      setPassword("")
      setEmail("")
  }
  return (
    <div>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Create your account
          </Header>
          <Form size="large" onSubmit={createAcc}>
            <Segment stacked>
              <Form.Input
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Form.Input
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <Form.Input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Input
                placeholder="E-mail address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Input
                fluid
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button color="teal" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            Already have an account?{" "}
            <Link to="/login">
              <a href="#">Log-In</a>
            </Link>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Signup;
