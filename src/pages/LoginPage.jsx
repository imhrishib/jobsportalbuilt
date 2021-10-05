import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./style.css";
import axios from "../api.js";

export default function Login({setLoggedIn}) {
  const [state, setState] = useState({ email: "", password: "" });

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const validateForm = () => {
    if (!validateEmail(state.email)) {
      setState({
        ...state,
        errorOpen: true,
        error: "Invalid email format",
      });
      return false;
    } else if (state.password.length < 6) {
      console.log("Am i coming here");
      setState({
        ...state,
        errorOpen: true,
        error: "Password length must be atleast 6",
      });
      return false;
    }
    console.log("hell");
    return true;
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  const handleChange = (name) => (e) => {
    setState({
      ...state,
      [name]: e.target.value,
      errorOpen: false,
    });
  };

  async function handleSubmit(event) {
    const email = state.email;
    const password = state.password;
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    const res = await axios.post("/login", {
      email,
      password,
    });
    console.log(res.status);
    console.log(res);
    if (res.data.email) {
      // Success
      console.log(res.data)
      localStorage.setItem("accessToken", res.data.access);
      localStorage.setItem("email",res.data.email);
      localStorage.setItem("username",res.data.username)
      setLoggedIn(true)
    } else {
      setState({
        ...state,
        errorOpen: true,
        error: res.data,
      });
      console.log(state);
    }
  }

  return (
    <div className="Login">
      <h5 align="center" className="error">
        {state.error}
      </h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label> Enter your Email Address</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={state.email}
            name="email"
            onChange={handleChange("email")}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={state.password}
            name="password"
            onChange={handleChange("password")}
          />
        </Form.Group>

        <Button block size="lg" type="submit">
          Log in
        </Button>
        <a href="/protected">Acess Protected content</a>
      </Form>
    </div>
  );
}
