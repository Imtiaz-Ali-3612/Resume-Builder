import { SET_PROJECT, LOADING, ERROR} from '../actions/actionTypes';
const projectReducer = (state = {
    project:{},
    loading: false,
    error: null,
}, action) => {
    switch (action.type) {
        case SET_PROJECT:
            return { ...state, project: action.data ,loading:false};
        case LOADING:
            return { ...state, loading: true };
        case ERROR:
            return { ...state, error: action.data };
        default:
            return state;
    }
};

export default projectReducer;
