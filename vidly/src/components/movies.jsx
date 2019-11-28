import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movieId => {
    //return a new array of all movies that have their id not equal to the id we have in our method arg i.e. the clicked movie
    const newMovies = this.state.movies.filter(movie => movie._id !== movieId);
    // We update our state with the new array after every click
    this.setState({ movies: newMovies });
  };
  render() {
    //  if there are no movies in the array/database,
    if (this.state.movies.length === 0)
      //  we render this paragraph
      return <p>There are currently no movies in the database</p>;
    //  else we render the paragraph showing the total movies and table
    return (
      <React.Fragment>
        {/*rendering the total movies in d database dynamically*/}
        <p>Showing {this.state.movies.length} movies in the database</p>
        <table className="table table-responsive-sm table-dark">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                {/*here we call the handler method*/}
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(movie._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
