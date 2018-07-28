export default function (state=null, action) { //either state=null or state={}
  switch (action.type) {
    case "USER_CLICKED":
      return action.payload;
      break;
  }
  return state;
};
