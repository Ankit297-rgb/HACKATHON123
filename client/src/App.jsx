import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import ProductPage from "./ProductPage";
import Explore from "./Explore";
import StatePage from "./StatePage";
import VRExperience from "./VRExperience";
import StateDetails from "./StateDetails";
import Contact from "./Contact";
import About from "./About";
import Festivals from "./Festivals";
import FestivalDetails from "./FestivalDetails";
import Quiz from "./Quiz";
import Folklores from "./Folklores";
import FolkloreDetails from "./FolkloreDetails";
import BlogPage from "./BlogPage";
import Profile from "./Profile";
import Learning from "./Learning";
import CourseMaterial from "./CourseMaterial";
import ChatBot from "./ChatBot";
import ModelPage from "./ModelPage";
import CartPage from "./CartPage";
import Payment from "./Payment";
import Food from "./Food";
import FoodDetails from "./FoodDetails";
import "bootstrap/dist/css/bootstrap.min.css";

// ProtectedRoute component for authentication-based access
const ProtectedRoute = ({ element }) => {
  const user = JSON.parse(localStorage.getItem("user")); // Get user from localStorage
  return user ? element : <Navigate to="/login" />; // Redirect to login if not authenticated
};

function App() {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Handle login and store user in localStorage
  const handleLogin = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  // Handle logout and clear user from localStorage
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Update user information and persist in localStorage
  const handleUpdateUser = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  // Save cart items to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home user={user} onLogout={handleLogout} />} />
        <Route path="/register" element={<Signup onLogin={handleLogin} />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
        <Route path="/home" element={<Home user={user} onLogout={handleLogout} />} />
        <Route path="/product" element={<ProductPage user={user} onLogout={handleLogout} cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/state/:state" element={<StatePage />} />
        <Route path="/statedetails" element={<StateDetails />} />
        <Route path="/vrexperience" element={<VRExperience />} />
        <Route path="/contact" element={<ProtectedRoute element={<Contact user={user} onLogout={handleLogout} />} />} />
        <Route path="/about" element={<ProtectedRoute element={<About user={user} onLogout={handleLogout} />} />} />
        <Route path="/festivals" element={<Festivals />} />
        <Route path="/festival/:festivalName" element={<FestivalDetails />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/folklores" element={<Folklores />} />
        <Route path="/folklore/:folkloreName" element={<FolkloreDetails />} />
        <Route path="/blog" element={<ProtectedRoute element={<BlogPage username={user ? user.name : ""} />} />} />
        <Route path="/profile" element={<ProtectedRoute element={<Profile user={user} onUpdateUser={handleUpdateUser} onLogout={handleLogout} />} />} />
        <Route path="/learning" element={<ProtectedRoute element={<Learning user={user} onLogout={handleLogout} />} />} />
        <Route path="/state/:state/model" element={<ModelPage />} />
        <Route path="/course/:courseName" element={<CourseMaterial />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/food/:foodName" element={<FoodDetails />} />
        <Route path="/food" element={<Food />} />
      </Routes>

      {/* Show the ChatBot only when the user is logged in */}
      {user && <ChatBot user={user} />}
    </BrowserRouter>
  );
}

export default App;