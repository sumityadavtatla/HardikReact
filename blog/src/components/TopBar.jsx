import React from 'react';

function TopBar() {
  return (
    <header className="top-bar">
      <div className="logo">My Blog</div>
      <nav className="navigation">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default TopBar;
