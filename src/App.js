import React, { Component } from 'react';
import SingleMovie from './SingleMovie.js'
import AllMovies from './AllMovies.js'





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
      </div>

    );
  }
}
export default App;
