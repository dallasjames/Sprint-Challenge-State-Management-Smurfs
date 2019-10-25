import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START'
export const FETCH_SMURF_PASS = 'FETCH_SMURF_PASS'
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL'

//because hes trynna get the smurfs
export function gargamel() {
    return dispatch => {
        dispatch({ type: FETCH_SMURF_START });

        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res)
                dispatch({ type: FETCH_SMURF_PASS, paylod: res })
            })
            .catch(err => {
                dispatch({ type: FETCH_SMURF_FAIL, payload: err })
            })
    }
}