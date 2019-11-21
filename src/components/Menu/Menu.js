import React, { Component } from 'react';
import './Menu.css';
import { GoRocket, GoLocation } from 'react-icons/go';
import { GiGears, GiTicket } from 'react-icons/gi';
import { FaHeartbeat } from 'react-icons/fa';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  submitSelection = (event) => {
    const { changeNews } = this.props;
    const selection = event.target.dataset.id;
    console.log(selection);
    changeNews(selection);
  }

  render() { 
    return (
    <header className="menu">
      <h1>What's <span className="new">New?</span></h1>
      <h2 data-id="local" className="topic" onClick={(event) => this.submitSelection(event)}><GoLocation /> Local News</h2>
      <h2 data-id="technology" className="topic" onClick={(event) => this.submitSelection(event)}><GiGears /> Technology</h2>
      <h2 data-id="entertainment" className="topic" onClick={(event) => this.submitSelection(event)}><GiTicket /> Entertainment</h2>
      <h2 data-id="science" className="topic" onClick={(event) => this.submitSelection(event)}><GoRocket /> Science</h2>
      <h2 data-id="health" className="topic" onClick={(event) => this.submitSelection(event)}><FaHeartbeat /> Health</h2>
    </header>
    )
  }
}

export default Menu;
 