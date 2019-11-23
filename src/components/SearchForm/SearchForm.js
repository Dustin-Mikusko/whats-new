import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
  }

  submitSearch = () => {
    const { getFilteredNews } = this.props;
    let searchItem = document.querySelector('.search-input');
    if (searchItem.value.length) {
      getFilteredNews(searchItem.value);
    } else {
      document.querySelector('.error').innerHTML = `<p>Enter Search Item</p>`;
    };
    searchItem.value = '';
    setTimeout(()=> {document.querySelector('.error').innerHTML =''}, 1000);
  }

  render() {
    return (
      <form className="search">
        <input className="search-input" type="text" placeholder="Search for news articles here."></input>
        <div className="error"></div>
        <button className="search-btn" type="button" onClick={() => this.submitSearch()}>Search Now</button>
      </form>
    )
  }
}

export default SearchForm;
