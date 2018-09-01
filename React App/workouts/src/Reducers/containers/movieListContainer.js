import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectedMovie } from '../actions/index';

class MovieList extends Component {
  createListItems() {
    return this.props.movies.map((movie) => {
      return (
        <li key={movie.id} onClick={() => this.props.selectedMovie(movie)}>{movie.name}</li>
      );
    });
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

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchProps(dispatch) {
  return bindActionCreators({selectedMovie: selectedMovie}, dispatch);
}

export default connect(mapStateToProps, mapDispatchProps)(MovieList);
