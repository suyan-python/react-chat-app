import React from "react";
import { useState } from "react";
import axios from "axios";
import "./login.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(" ");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": "ea9cf5e1-ab3d-46e0-92ef-50dda4d8a381",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      //username | password => chatengine -> give message
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      //works out --> logged in
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (error) {
      //error-> tyr with new username...
      setError("Oops, Incorrect credentials...");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h4 className="welcome">Welcome to,</h4>
        <h1 className="title">SUYAN iChat</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />

          <div align="center">
            <button type="submit" className="button">
              <span>Login</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
