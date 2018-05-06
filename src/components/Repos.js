import React, { Component } from 'react';
import { Card, Col, Row } from 'react-materialize';
import { BrowserRouter, Route } from 'react-router-dom';

// Components 
import Contributors from './Contributors';

class Repos extends Component {
  render() {
    let repoItems;
    if(this.props.repos) {
      repoItems = this.props.repos.map(repo => {
        let id = repo.id;
        let title = repo.name;
        let languages = Object.keys(repo.languages_url).forEach(language => {
          return (
            <span class="chip">{language}</span>
          );
        });
        let desc = repo.description;
        let stars = repo.stargazers_count
        let issues = repo.issues_url;
        let contributors =repo.contributors_url
        return (
          <Col m={6} s={12} l={4}>
            <Card
              key={id} 
              className='blue-grey darken-1' 
              textClassName='white-text' 
              title={title}>
              <p>{desc}</p>
              
              <div className="card-action">
                <a href="#">Stars: {stars}</a>
                <a href="#">Issues</a>
              </div>
              <BrowserRouter>
                <Route path="/contributors" component={Contributors} class="card-action" />
              </BrowserRouter>
            </Card>
          </Col>
        )
      });
    }

    return (
      
          <div>
            { repoItems }
          </div>
      
    );
  }
}

export default Repos;