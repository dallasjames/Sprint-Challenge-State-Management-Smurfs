import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, ADD_SMURF } from '../action/getSmurfs';

const initialState = {
  SmurfList: [],
  isFetching: false,
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        SmurfList: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
      case ADD_SMURF:
        console.log(action.payload)
          return {
            ...state,
            SmurfList: [...state.SmurfList, action.payload],
            error: action.payload,
            isFetching: false
          };
      default:
        return state;
  }
};

export default reducer;