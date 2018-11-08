import React, { Component } from 'react';
import axios from 'axios'



class SingleMovie extends Component {

  handleSubmit(event) {

    event.preventDefault();
    axios.get("http://www.omdbapi.com/?t=" + document.getElementById("search").value + "&apikey=68b8fe4").then(response => document.getElementById("info").innerHTML = ("Title: " + response.data.Title + ", Year released: " + response.data.Year + ", Genre: " + response.data.Genre + ", Actors and Actresses " + response.data.Actors + ", " + response.data.Poster));

}
  render() {
    return (
      <div className="SearchBar" onSubmit={this.handleSubmit}>
        <form>
          <label>
            <input id = "search" type="text" placeholder = "Search for single movies"/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SingleMovie;
