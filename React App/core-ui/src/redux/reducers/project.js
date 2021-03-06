const INITIAL_STATE = {
  submitted: false,
  success: false,
  error: false,
  projects: []
};

function projectReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ACTION_START': {
      return {
        ...state,
        submitted: true
      };
    }
    case 'ACTION_SUCCESS': {
      if (action.payLoad) {
        return {
          ...state,
          projects: [...action.payLoad],
          submitted: false,
          success: true
        };
      } else {
        return {
          ...state,
          submitted: false,
          success: true
        };
      }
    }
    case 'ACTION_ERROR': {
      return {
        ...state,
        submitted: false,
        error: true
      };
    }
    default:
      return state;
  }
}

export default projectReducer;
