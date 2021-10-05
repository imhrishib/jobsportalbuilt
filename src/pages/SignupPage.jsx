import React, { useState,useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./style.css";
import axios from '../api.js'
import {useHistory} from 'react-router-dom'

export default function Signup() {
  const [state,setState] = useState({email:"",password:"",confirmPassword:"",fullname:""})
  const history = useHistory();
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
  const validateForm = ()=>{
    if (!validateEmail(state.email)) {
        setState({
            ...state,
          errorOpen: true,
          error: "Invalid email format",
        });
        return false;
      }else if (state.fullname.length < 3) {
        console.log("Am i coming here");
        setState({
            ...state,
          errorOpen: true,
          error: "name must contain at least 3 characters",
        });
        return false;
      }
      else if (state.password.length < 6) {
        console.log("Am i coming here");
        setState({
            ...state,
          errorOpen: true,
          error: "Password length must be atleast 6",
        });
        return false;
      } else if (!passwordMatch()) {
        setState({
            ...state,
          errorOpen: true,
          error: "Passwords don't match",
        });
        return false;
      }
      console.log("hell")
      return true;
  }
  const passwordMatch = () => {
      console.log(state.password==state.confirmPassword)
      return state.password == state.confirmPassword;
  }

  useEffect(() => {
      console.log(state)
  }, [state])


  const handleChange = (name) => (e) => {
    setState({
        ...state,
      [name]: e.target.value,
      errorOpen:false
    });
  };
  
  async function handleSubmit(event) {
      const email = state.email
      const password = state.password
      const fullname = state.fullname
    event.preventDefault();
    if(!validateForm()){
        return;
    }
    console.log("That's not who we are")
    const res = await axios.post('/signup',{
        email,
        password,
        fullname
    })
    console.log(res.status)
    if(res.data.email){
        history.push("/login")
    }
    else{
        setState({
            ...state,
          errorOpen: true,
          error: res.data.message,
        });
        console.log(state)
    }
  }

  return (
    <div className="Login">
        <h5 align="center" className="error">{state.error}</h5>
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
        <Form.Group size="lg" controlId="text">
          <Form.Label> Enter your full name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={state.fullname}
            onChange={handleChange("fullname")}
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
        <Form.Group size="lg" controlId="confirmpassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={state.confirmPassword}
            onChange={handleChange("confirmPassword")}
          />
        </Form.Group>
        <Button block size="lg" type="submit">
        Sign up
        </Button>
      </Form>
    </div>
  );
}