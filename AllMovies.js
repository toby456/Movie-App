import React, { Component } from 'react';
import axios from 'axios'



class AllMovies extends Component {

  handleSubmit(event) {
    event.preventDefault();
    axios.get("http://www.omdbapi.com/?s=" + document.getElementById("AllSearchBar").value + "&apikey=68b8fe4").then(response => document.getElementById("info").innerHTML = (response.data));

}
  render() {
    return (
      <div className="AllSearchBar" onSubmit={this.handleSubmit}>
        <form>
          <label>
            <input id = "Allsearch" type="text" placeholder = "Search for a list of movies"/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AllMovies;
