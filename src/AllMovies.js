import React, { Component } from 'react';
import axios from 'axios'



class AllMovies extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      Year:'',
      Released:'',
      Genre:'',
      Director:'',
      Writer:'',
      Actors:'',
      Plot:'',
      Language:'',
      Awards:'',
      Poster:'',
      imdbRating:'',
      imdbVotes:'',
      Type:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.get("http://www.omdbapi.com/?s=" + document.getElementById("Allsearch").value + "&apikey=68b8fe4").then(response => this.setState({
      Title: response.data.Title,
      Released: response.data.Released,
      Genre: response.data.Genre,
      Director: response.data.Director,
      Writer: response.data.Writer,
      Actors: response.data.Actors,
      Plot: response.data.Plot,
      Language: response.data.Language,
      Country: response.data.Country,
      Awards: response.data.Awards,
      Poster: response.data.Poster,
      imdbRating: response.data.imdbRating,
      imdbVotes: response.data.imdbVotes,
      Type: response.data.Type}));
    };


  render() {
    return (
      <div className="AllSearchBar" onSubmit={this.handleSubmit}>
        <form>
          <label>
            <input id = "Allsearch" type="text" placeholder = "Search for a list of movies"/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <img src={this.state.Poster} alt="Movie Poster"/>
        <table>
      <tr>{this.state.Title}</tr>
      <tr>{this.state.Released}</tr>
      <tr>{this.state.Genre}</tr>
      <tr>{this.state.Director}</tr>
      <tr>{this.state.Writer}</tr>
      <tr>{this.state.Actors}</tr>
      <tr>{this.state.Plot}</tr>
      <tr>{this.state.Language}</tr>
      <tr>{this.state.Country}</tr>
      <tr>{this.state.Awards}</tr>
      <tr>{this.state.imdbRating}</tr>
      <tr>{this.state.imdbVotes}</tr>
      <tr>{this.state.Type}</tr>
    </table>
      </div>
    );
  }
}

export default AllMovies;
