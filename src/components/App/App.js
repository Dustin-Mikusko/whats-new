import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import Menu from '../Menu/Menu';
import NewsContainer from '../NewsContainer/NewsContainer';


class App extends Component {
  constructor() {
    super();
    this.newsTypes = {
      local: [...local],
      science: [...science],
      entertainment: [...entertainment],
      health: [...health],
      technology: [...technology]
    }
    this.state = {
      news: local  
    }
  }

  getFilteredNews = (search) => {
    const filteredNews = this.state.news.filter(article => {
      return article.headline.includes(search) || article.description.includes(search);
    });
    if (filteredNews.length) {
      this.setState({ news: filteredNews })
    } else {
      document.querySelector('.error').innerHTML = `<p>No results found</p>`;
    }
    setTimeout(()=> {document.querySelector('.error').innerHTML =''}, 1000);
  }

  changeNews = (selected) => {
    this.setState({ news: this.newsTypes[selected] });
  }

  render () {
    return (
      <div className="app">
      <Menu 
      newsTypes ={this.newsTypes}
      changeNews={this.changeNews}/>
      <NewsContainer 
      getFilteredNews={this.getFilteredNews}
      news={this.state.news}/>
      </div>
    );
  }
}

export default App;
