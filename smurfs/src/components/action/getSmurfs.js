import axios from 'axios';

// action types
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
// export const ADD_PASS = 'ADD_PASS';
// export const ADD_FAIL = 'ADD_FAIL';

// action creator
export const fetchSmurfs = () => dispatch => {
  // action objects
  dispatch({ type: START_FETCHING });
  // do some async action and dispatch an error or success action
  axios
    .get(
      'http://localhost:3333/smurfs'
    )
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err }));
};

export const addSmurf = smurf => dispatch => {
  dispatch({type: ADD_SMURF})
  axios.post('http://localhost:3333/smurfs', smurf)
      .then(res => {
          console.log(res)
          dispatch({ type: FETCH_SUCCESS, payload: res.data })
      })
      .catch(err => {
          console.error(err)
          dispatch({type: FETCH_FAILURE, payload: err})
      })
}