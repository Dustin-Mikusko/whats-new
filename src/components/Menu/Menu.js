import React, { Component } from 'react';
import './Menu.css';
import { GoLocation } from 'react-icons/go';
import { GiGears, GiTicket } from 'react-icons/gi';
import { FaHeartbeat } from 'react-icons/fa';
import { GiMicroscope } from 'react-icons/gi';
import PropTypes from 'prop-types';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.topics = null;
  }

  highlightSelection = (event) => {
    this.topics.forEach(topic => {
      topic.classList.remove('active');
    });
    event.target.classList.add('active');
  }

  submitSelection = (event) => {
    this.topics = document.querySelectorAll('.topic');
    const { changeNews } = this.props;
    const selection = event.target.dataset.id;
    this.highlightSelection(event);
    changeNews(selection);
  }

 

  render() { 
    return (
    <header className="menu">
      <h1>What's <span className="new">New?</span></h1>
      <h2 data-id="local" className="topic active" onClick={(event) => this.submitSelection(event)}><GoLocation /> Local News</h2>
      <h2 data-id="technology" className="topic" onClick={(event) => this.submitSelection(event)}><GiGears /> Technology</h2>
      <h2 data-id="entertainment" className="topic" onClick={(event) => this.submitSelection(event)}><GiTicket /> Entertainment</h2>
      <h2 data-id="science" className="topic" onClick={(event) => this.submitSelection(event)}><GiMicroscope /> Science</h2>
      <h2 data-id="health" className="topic" onClick={(event) => this.submitSelection(event)}><FaHeartbeat /> Health</h2>
    </header>
    )
  }
}

Menu.propTypes = {
  changeNews: PropTypes.func
}

export default Menu;
 