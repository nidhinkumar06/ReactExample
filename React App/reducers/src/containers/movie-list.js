import React, { Component } from 'react';
import { bindActionCreators } from  'redux';
import { connect } from 'react-redux';

class MovieList extends Component {
  createListItems() {
    return this.props.movies.map((movie) => {
      return (
        <li key={movie.id}>{movie.movieName}</li>
      );
    })
  }
  render() {
    return (
      <div>
        <ul>
          { this.createListItems() }
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(MovieList);
