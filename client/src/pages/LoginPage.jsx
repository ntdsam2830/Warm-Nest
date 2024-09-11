import React from "react";

function LoginPage() {
  return (
    <div className="login">
      <div className="login_content">
        <form className="login_content_form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
        </form>
        <a href="/register">Don't have an account? Sign in here</a>
      </div>
    </div>
  );
}

export default LoginPage;
