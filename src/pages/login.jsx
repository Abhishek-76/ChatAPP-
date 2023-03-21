import React from "react";
const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">GamBara</span>
        <span className="title">Log in</span>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="email" />
          <button>Sign in</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
