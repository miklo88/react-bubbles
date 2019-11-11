import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  // setting state for username and password
  const [user, setUser] = useState({ username: "Lambda School", password: "i<3Lambd4" });
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const login = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", user)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubbles");
      })
      .catch(error => console.log(error));
  };

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  return (
    <>
      <div>
        <h1>Welcome to the Bubble App!</h1>
        <p>Carl's Bubbles!</p>
      </div>
      <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={user.username}
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Password"
            onChange={handleChange}
          />
          <button>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
