/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {combineReducer} from 'react-redux';
import store from './src/Redux/store';

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider> 
    
)
AppRegistry.registerComponent(appName,

    ()=>Root);
