import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchComponent from './components/Search.component';
import ResultsContainter from './containers/Results.container';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      results: [],
      query: ''
    }
    this.handleQuery = this.handleQuery.bind(this);
  }

  componentWillReceiveProps(newProps){
    console.log(newProps);
  }

  handleQuery(query){
    this.setState({query: query});
    this.validateQuery(query);
  }

  validateQuery(query){
    if(query && query.length > 2) {
      this.handleSearch(query);
    }
  }
  handleSearch(query){
    const dbUrl = 'https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=';
    

    axios.get(`${dbUrl}${query}`)
    .then( (response) => {
      this.setState({results: response.data.results});
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="App">
        <SearchComponent inputValue={this.state.query} handleFunction={this.handleQuery}/>
        <ResultsContainter items={this.state.results} />
      </div>
    );
  }
}

export default App;
