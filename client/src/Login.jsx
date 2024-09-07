import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Css/Login.css'; // Import the CSS file

function Login({ onLogin }) {
  const [name, setName] = useState('');  // Add name state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make sure name, email, and password are provided
    if (!name || !email || !password) {
      alert("Please fill in all the fields.");
      return;
    }

    // Perform login request
    axios.post('http://localhost:3001/login', { name, email, password })
      .then(result => {
        if (result.data === "Success") {
          onLogin({ name, email }); // Notify parent component of login
          navigate('/home'); // Redirect to Home Page after login
        } else {
          alert("Incorrect Name, Email or Password");
        }
      })
      .catch(err => console.log(err));
  };
  

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 w-100">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="form-control rounded-0"
              value={name}  // Bind value to state
              onChange={(e) => setName(e.target.value)}  // Update state on change
              required  // Make name required
            />
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              value={email}  // Bind value to state
              onChange={(e) => setEmail(e.target.value)}  // Update state on change
              required  // Make email required
            />
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              value={password}  // Bind value to state
              onChange={(e) => setPassword(e.target.value)}  // Update state on change
              required  // Make password required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-0">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
