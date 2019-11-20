import React from 'react';
import './Menu.css'

const Menu = () => {
  return (
    <header className="menu">
      <h1>What's <span className="new">New?</span></h1>
      <h2 className="topic">Local News</h2>
      <h2 className="topic">Technology</h2>
      <h2 className="topic">Entertainment</h2>
      <h2 className="topic">Science</h2>
      <h2 className="topic">Health</h2>
    </header>
  )
}

export default Menu;
