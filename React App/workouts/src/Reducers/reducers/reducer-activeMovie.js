export default function (state=null, action) { //either state=null or state={}
  switch (action.type) {
    case "MOVIE_CLICKED":
      return action.movieSelected;
      break;
  }
  return state;
};
