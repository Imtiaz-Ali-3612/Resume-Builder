import { GET_RESUME_ORDER,SET_RESUME_ORDER, LOADING, ERROR} from './actionTypes';
import AsyncStorage from '@react-native-community/async-storage';
import server from '../../config/config'

export const getOrder = (token) => ({
    type: GET_RESUME_ORDER,
    data:token,
});

export const setOrder = token => ({
    type: SET_RESUME_ORDER,
    data:token
});


export const loading = bool => ({
    type:  LOADING,
    data: bool,
});

export const error = error => ({
    type: ERROR,
    data:error,
});
export const getResumeOrder = () => dispatch => 

 AsyncStorage.getItem('order')
        .then((data) => {
            console.log('----get resume order-----')
            console.log('------data----')
            console.log(data)
            data=JSON.parse(data)
            dispatch(loading(false));
            dispatch(getOrder(data));
        })
        .catch((err) => {
            dispatch(loading(false));
            dispatch(error(err.message || 'ERROR'));
        })



export const setResumeOrder = (data) => dispatch =>
    AsyncStorage.setItem('order', JSON.stringify(data))
        .then((data) => {
            console.log('----order ')
            console.log(data)
            dispatch(loading(false));
            dispatch(setOrder(data));
        })
        .catch((err) => {
            console.log('false ')
            console.log(err)
            dispatch(loading(false));
            dispatch(error(err.message || 'ERROR'));
        })

