import { combineReducers } from 'redux';
import { GET_HEADING,SET_HEADING, LOADING, ERROR} from '../actions/actionTypes';

const resumeReducer = (state = {
    heading:{},
    loading: true,
    error: null,
}, action) => {
    switch (action.type) {
        case GET_HEADING:
            return { ...state,heading:action.data };
        case SET_HEADING:
            return { ...state, heading: action.data,loading:false };
        case LOADING:
            console.log('=state loading=>',state.loading)
            console.log('====>',action.data)
            return { ...state, loading: true};
        case ERROR:
            return { ...state, error: action.data };
        default:
            return state;
    }
};

export default resumeReducer;
// export default combineReducers({
//     token: rootReducer
// });
