import React, { Component } from 'react';
import './App.css';
import Menu from '../Menu/Menu';
import NewsContainer from '../NewsContainer/NewsContainer';
import { getNews } from '../../apiCalls';


class App extends Component {
  constructor() {
    super(); 
    this.state = {
      newsTypes: null,
      currentNews: null,
      error: '',
      isLoading: true  
    }
  }

  async componentDidMount() {
    try {
      const news = await getNews();
      this.setState({ newsTypes: news });
      this.setState ({ currentNews: news.local })
      this.setState({ isLoading: false });
    } catch ({ message }) {
      this.setState({ error: message })
    }
  }

  getFilteredNews = (search) => {
    const filteredNews = this.state.currentNews.filter(article => {
      return article.headline.includes(search) || article.description.includes(search);
    }); 
    if (filteredNews.length) {
      this.setState({ currentNews: filteredNews })
    } else {
      document.querySelector('.error').innerHTML = `<p>No results found</p>`;
    }
    setTimeout(()=> {document.querySelector('.error').innerHTML =''}, 1000);
  }

  changeNews = (selected) => {
    this.setState({ currentNews: this.state.newsTypes[selected] });
  }

  render () {
    if (this.state.isLoading) {
      return (
        <h1>Gathering News...</h1>
      )
    } else {
      return (
        <div className="app">
        <Menu 
        newsTypes ={this.newsTypes}
        changeNews={this.changeNews}/>
        <NewsContainer 
        getFilteredNews={this.getFilteredNews}
        news={this.state.currentNews}/>
        </div>
      );
    }
  }
}

export default App;
