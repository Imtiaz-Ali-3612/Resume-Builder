import { combineReducers } from 'redux';
import { GET_TOKEN,SET_TOKEN, REMOVE_TOKEN, LOADING, ERROR} from '../actions/actionTypes';

const rootReducer = (state = {
    token: {},
    loading: true,
    error: null,
}, action) => {
    switch (action.type) {
        case GET_TOKEN:
            return { ...state, token: action.data };
        case SET_TOKEN:
            return { ...state, token: action.data };
        case REMOVE_TOKEN:
            return { ...state, token: action.data };
        case LOADING:
            return { ...state, loading: action.data };
        case ERROR:
            return { ...state, error: action.data };
        default:
            return state;
    }
};


export default rootReducer;
// export default combineReducers({
//     token: rootReducer
// });
