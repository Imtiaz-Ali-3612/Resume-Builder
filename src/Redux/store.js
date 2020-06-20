import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/reducers';
import ResumeReducer from './reducers/resumeReducer';
import EducationReducer from './reducers/educationReducer';
import ExperianceReducer from './reducers/experianceReducer';
import ProjectReducer from './reducers/projectReducer';
import ResumeOrderReducer from './reducers/resumeOrderReducer';

import { combineReducers } from 'redux';

var allReducers=combineReducers({
    resume:ResumeReducer,
    token: rootReducer,
    education:EducationReducer,
    experiance:ExperianceReducer,
    project:ProjectReducer,
    order:ResumeOrderReducer
});

const middlewares = [ReduxThunk];

const store = createStore(
     allReducers,
    {},// default state of the application
    compose(applyMiddleware(...middlewares)),
);

export default store;