import React from 'react';
import './header.css';

const Header = ({ username }) => {
  const onLogout = () => {
    // Add logout logic here
    console.log("Logout clicked");
  };

  return (
    <header className="header">
      <div className="welcome-message">
        <h1>Welcome, {username}!</h1>
      </div>
      <div className="logout-container">
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;