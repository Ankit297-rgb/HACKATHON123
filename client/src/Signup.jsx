import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import './Css/Signup.css'; // Ensure you import your CSS file

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');  // New state for confirm password
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {  // Check if passwords match
            alert("Passwords do not match");
            return;
        }
        axios.post('http://localhost:3001/register', { name, email, password })
        .then(result => {
            console.log(result);
            navigate('/login');
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>Register</h2>
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
                            onChange={(e) => setName(e.target.value)}
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
                            onChange={(e) => setEmail(e.target.value)}
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
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 w-100">
                        <label htmlFor="confirmPassword">
                            <strong>Confirm Password</strong>
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            className="form-control rounded-0"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn-register w-100 rounded-0">
                        Register
                    </button>
                    <p className="text-center mt-3">
                        Already have an account?{" "}
                        <Link to="/login" href="/login" className="text-decoration-none">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
