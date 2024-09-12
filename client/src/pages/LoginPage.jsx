import React, { useState } from "react";
import "../styles/Login.scss";

const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="login">
      <div className="login_content">
        <form className="login_content_form">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">LOGIN</button>
        </form>
        <a href="/register">Don't have an account? Sign in here</a>
      </div>
    </div>
  );
};

export default LoginPage;
