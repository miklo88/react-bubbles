import React, { useState } from "react";
import { axiosWithAuth } from "./axiosAuth";

// establishing props and setting credentials to use state.
const Login = (props) => {
  const [credentials, setCredentials] = useState({});

  // make a post request to retrieve a token from the api and prevent default :) 
  const login = e => {
    e.preventDefault();
    axiosWithAuth().post('login/endpoint', credentials)
    .then( res => {
      localStorage.setItem('token', res.data.token);
      this.props.histroy.push('/');
    })
  }

  // handle change function to execute form inputs.
  const handleChange = e => {
    setCredentials: {
      ...credentials, 
      [e.target.name]; e.target.value
    }
  }

  // when you have handled the token, navigate to the BubblePage route
  
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      {/* <p>Build a login page here</p> */}
      
      {/*  login page form. */}
      <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      
    </>
  );
};

export default Login;
