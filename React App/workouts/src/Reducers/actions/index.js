export const selectedMovie = (movie) => {
  console.log("you clicked", movie.name);
  return {
    type: "MOVIE_CLICKED",
    movieSelected: movie
  };
};
