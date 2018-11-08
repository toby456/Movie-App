import React, { Component } from 'react';
import SingleMovie from './SingleMovie.js'
import AllMovies from './AllMovies.js'

// import express from ''
// const express = require("express");
// const path = require("path");
// const open = require("open");
// const lodash = require("lodash")
const axios = require("axios")

class App extends Component {

  render() {
    return (
      <div className="App">
      <header className = 'Header'>
        <h1>Search for any movie</h1>
        <h2> Use the search box below</h2>
        </header>
      <SingleMovie/>
      <br />
      <AllMovies/>
      <br />
      <div id = "info">
      </div>
      <div id = "info2">
      </div>
      </div>
    );
  }
}
export default App;
