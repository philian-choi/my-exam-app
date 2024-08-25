// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1>My Exam App</h1>
      <p>Welcome to the ultimate exam preparation tool.</p>
      <nav>
        <Link to="/quiz">Start Quiz</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Home;
