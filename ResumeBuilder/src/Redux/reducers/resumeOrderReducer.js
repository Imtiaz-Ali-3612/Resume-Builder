import { combineReducers } from 'redux';
import { GET_RESUME_ORDER,SET_RESUME_ORDER, LOADING, ERROR} from '../actions/actionTypes';

const ResumeOrderReducer = (state = {
    order: {},
    loading: true,
    error: null,
}, action) => {
    switch (action.type) {
        case GET_RESUME_ORDER:
            return { ...state, order: action.data };
        case SET_RESUME_ORDER:
            return { ...state, order: action.data };
        case LOADING:
            return { ...state, loading: action.data };
        case ERROR:
            return { ...state, error: action.data };
        default:
            return state;
    }
};


export default ResumeOrderReducer;
// export default combineReducers({
//     token: rootReducer
// });
