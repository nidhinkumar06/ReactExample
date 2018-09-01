import React, { Component } from 'react';
import { connect } from 'react-redux';
class MovieDetail extends Component {
  render () {
    if (!this.props.movie) {
      return (
        <div>
          <h3>Select a movie....</h3>
        </div>
      );
    }
    return (
      <div>
        <h1>{this.props.movie.name}</h1>
        <h1>{this.props.movie.desc}</h1>
        <h1>{this.props.movie.ratings}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.activeMovie
  };
}

export default connect(mapStateToProps)(MovieDetail);
