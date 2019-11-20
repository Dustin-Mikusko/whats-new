import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import Menu from '../Menu/Menu';
import NewsContainer from '../NewsContainer/NewsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: local
    }
  }

  render () {
    return (
      <div className="app">
      <Menu />
      <NewsContainer selected={this.state.selected}/>
      </div>
    );
  }
}

export default App;
