import React from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  // const login = () => {
  //   axios.post('endpoint/here', userCredentials)
  //     .then(res => {
  //       localStorage.setItem('token', res.data.token);
  //       props.history.push('/dashboard');
  //     }
  // }
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      {/* <p>Build a login page here</p> */}
      {/* Building login page form. */}
      <button>Login</button>
    </>
  );
};

export default Login;
