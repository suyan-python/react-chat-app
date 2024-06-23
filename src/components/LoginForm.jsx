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
      "Project-ID": "31e9d0bb-add7-4144-8cb1-d440c0e1ccd0",
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
        <h1 className="title">Suyan iChat</h1>
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
