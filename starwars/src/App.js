import React, { Component } from 'react';
import './App.css';

import List from './components/List';
import Pagination from './components/Pagination';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      currentPage: 1,
      charsPerPage: 4,
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  

  pageClickHandler = event => {
    this.getCharacters('https://swapi.co/api/people/?page=' + event.target.id);
    // this.setState({
    //   currentPage: Number(event.target.id),
    // });
  }

  render() {
    // const { starwarsChars, currentPage, charsPerPage } = this.state;

    // const indexOfLastChars = currentPage * charsPerPage;
    // const indexOfFirstTodo = indexOfLastChars - charsPerPage;
    // const currentChars = starwarsChars.slice(indexOfFirstTodo, indexOfLastChars);

    // const pageNumbers = [];
    // for (let i = 1; i <= Math.ceil(starwarsChars.length / charsPerPage); i++) {
    //   pageNumbers.push(i);
    // }
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Pagination pageNumbers={[1,2,3,4,5,6,7,8,9]} pageClickHandler={this.pageClickHandler} />
        <List chars={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
