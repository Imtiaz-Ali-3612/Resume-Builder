import { SET_EXPERIANCE, LOADING, ERROR} from '../actions/actionTypes';
const experianceReducer = (state = {
    experiance:{},
    loading: false,
    error: null,
}, action) => {
    switch (action.type) {
        // case GET_EDUCATION:
        //     return { ...state,education:action.data };
        case SET_EXPERIANCE:
            return { ...state, experiance: action.data ,loading:false};
        case LOADING:
            return { ...state, loading: true };
        case ERROR:
            return { ...state, error: action.data };
        default:
            return state;
    }
};

export default experianceReducer;
