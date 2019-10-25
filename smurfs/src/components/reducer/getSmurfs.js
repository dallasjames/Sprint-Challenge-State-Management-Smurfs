import { FETCH_SMURF_START, FETCH_SMURF_PASS, FETCH_SMURF_FAIL } from '../action/getSmurfs';

const initialState = {
    name: null,
    age: null,
    height: null,
    error: '',
    loading: false
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_SMURF_PASS:
            return {
                ...state,
                name: action.payload,
                age: action.payload,
                height: action.payload,
                loading: false
            }
        case FETCH_SMURF_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default: state
    }
}