import { combineReducers } from 'redux';
import { GET_EDUCATION,SET_EDUCATION, LOADING, ERROR} from '../actions/educationActions';

const educationReducer = (state = {
    education:{},
    loading: true,
    error: null,
}, action) => {
    switch (action.type) {
        case GET_EDUCATION:
            return { ...state,education:action.data };
        case SET_EDUCATION:
            return { ...state, education: action.data };
        case LOADING:
            return { ...state, loading: action.data };
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
