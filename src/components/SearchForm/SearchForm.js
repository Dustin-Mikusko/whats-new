import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form className="search">
        <input className="search-input" type="text" placeholder="Search for news articles here."></input>
        <button className="search-btn" type="button">Search Now</button>
      </form>
    )
  }
}

export default SearchForm;
