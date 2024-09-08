// App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import ProductPage from "./Product";
import Explore from './Explore';
import StatePage from './StatePage'; 
import VRExperience from './VRExperience';
import StateDetails from './StateDetails';
import Contact from './Contact';
import IndiaMap from "./IndiaMap";
import About from "./About";
import Festivals from './Festivals';
import FestivalDetails from './FestivalDetails';
import Quiz from './Quiz';
import Folklores from './Folklores';
import FolkloreDetails from './FolkloreDetails';
import BlogPage from './BlogPage';
import Learning from './Learning';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user)); // Save user to localStorage
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Remove user from localStorage
  };

  return (
    <BrowserRouter> {/* Ensure BrowserRouter is here */}
      <Routes>
        <Route path="/register" element={<Signup onLogin={handleLogin} />} />
        <Route 
          path="/login" 
          element={
            user ? (
              <Navigate to="/product" />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route path="/home" element={<Home user={user} onLogout={handleLogout} />} />
        <Route
          path="/product"
          element={user ? <ProductPage user={user} onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        
        <Route path="/explore" element={<Explore />} />
        <Route path="/state/:state" element={<StatePage />} />
        <Route path="/statedetails" element={<StateDetails />} />
        <Route path="/vrexperience" element={<VRExperience />} />
        <Route path="/contact" element={<Contact user={user} onLogout={handleLogout} />} />
        <Route path="/about" element={<About />} />
        <Route path="/festivals" element={<Festivals />} />
        <Route path="/festival/:festivalName" element={<FestivalDetails />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/folklores" element={<Folklores />} />
        <Route path="/folklore/:folkloreName" element={<FolkloreDetails />} />
        <Route path="/blog" element={<BlogPage username={user ? user.name : ''} />} />
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/home" element={user ? <BlogPage username={user.name} /> : <Login onLogin={handleLogin} />} />
        <Route path="/learning" element={<Learning />} />
      </Routes>
    </BrowserRouter> // Close BrowserRouter here
  );
}

export default App;
