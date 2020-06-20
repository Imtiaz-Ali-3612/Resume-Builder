import { combineReducers } from 'redux';
import { GET_EDUCATION,SET_EDUCATION, LOADING, ERROR} from '../actions/actionTypes';

const educationReducer = (state = {
    education:{},
    loading: false,
    error: null,
}, action) => {
    switch (action.type) {
        case GET_EDUCATION:
            return { ...state,education:action.data };
        case SET_EDUCATION:
            return { ...state, education: action.data ,loading:false};
        case LOADING:
            return { ...state, loading: true };
        case ERROR:
            return { ...state, error: action.data };
        default:
            return state;
    }
};

export default educationReducer;
// export default combineReducers({
//     token: rootReducer
// });
