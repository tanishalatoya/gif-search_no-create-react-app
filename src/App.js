import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: []
    }
  } 

  //Using Fetch API

  componentDidMount(){
    fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzCC')
      .then(response => response.json())
      .then(data => this.setState({ gifs: [...data.data] }))
      .catch(error => console.log('Error in fetching and/or parsing data', error))
  }

  //Using axios... no need to parse the response and has higher browser compatiblity

  // componentDidMount() {
  //   axios.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
  //     .then( response =>  {
  //       this.setState({
  //         gifs: response.data.data
  //       })
  //     })
  //     .catch(error =>  {
  //       console.log('Error fetching and parsing data', error)
  //     })
  //   }

  render() {
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm />      
          </div>   
        </div>    
        <div className="main-content">
          <GifList />
        </div>
      </div>
    );
  }
}
