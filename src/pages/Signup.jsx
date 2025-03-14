import React from "react";

const Signup = () => {
  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <p>Join us and explore delicious food options!</p>

      <button className="email-signup">Continue with Email</button>
      <button className="google-signup">Continue with Google</button>

      <p className="login-link">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Signup;
