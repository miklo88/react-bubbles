import React from "react";
import { axiosWithAuth } from "../../../server";

const Login = () => {
  // make a post request to retrieve a token from the api

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
      
      <button>Login</button>
    </>
  );
};

export default Login;
