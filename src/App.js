import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';
import axios from 'axios';
import './App.css';

// Components 
import Header from './components/Header';
import Repos from './components/Repos';

class App extends Component {
  constructor() {
    super();
    this.state = {
      repos: [],
      repos_count: 6,
      repos_sort: 'created: asc',
      text: 'react'
    }
  }

  componentWillMount() {
    this.getRepos();
  }

  getRepos() {
    axios.request({
      method: 'get',
      url: `https://api.github.com/search/repositories?q=${this.state.text}&per_page=${this.state.repos_count}&sort=${this.state.repos_sort}`
    }).then((response) => {
      this.setState({ repos: response.data.items }, () => {
        console.log(this.state);
      });
    }).catch((e) => {
      console.log(e);
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Row>
            <Repos repos={ this.state.repos }/>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
