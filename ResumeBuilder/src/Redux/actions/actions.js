import { POST_SIGNUP,GET_TOKEN,SET_TOKEN, REMOVE_TOKEN, LOADING, ERROR} from './actionTypes';
import AsyncStorage from '@react-native-community/async-storage';
import server from '../../config/config'

export const getToken = (token) => ({
    type: GET_TOKEN,
    data:token,
});

export const setToken = token => ({
    type: SET_TOKEN,
    data:token
});

export const removeToken = () => ({
    type: REMOVE_TOKEN,
});

export const loading = bool => ({
    type:  LOADING,
    data: bool,
});

export const error = error => ({
    type: ERROR,
    data:error,
});
// export const postSignup = data => ({
//     type: POST_SIGNUP,
//     data:data,
// });



// export const deleteFood = (key) => (
//   {
//     type: DELETE_FOOD,
//     key: key
//   }
// );
export const getUserToken = () => dispatch => 

 AsyncStorage.getItem('token')
        .then((data) => {
            dispatch(loading(false));
            dispatch(getToken(data));
        })
        .catch((err) => {
            dispatch(loading(false));
            dispatch(error(err.message || 'ERROR'));
        })



export const setUserToken = (data) => dispatch =>
    AsyncStorage.setItem('token', data)
        .then((data) => {
            dispatch(loading(false));
            dispatch(setToken(data));
        })
        .catch((err) => {
            dispatch(loading(false));
            dispatch(error(err.message || 'ERROR'));
        })

export const removeUserToken = () => dispatch =>
    AsyncStorage.removeItem('token')
        .then((data) => {
            dispatch(loading(false));
            dispatch(removeToken(data));
        })
        .catch((err) => {
            dispatch(loading(false));
            dispatch(error(err.message || 'ERROR'));
        })

export const postSignup =(data)=>dispatch=>{
    console.log('---------post Signup ---------')
        fetch(server.backend+'user/signup', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: data.email,
            password: data.password
        })
        });
}

export const postLogin =(data)=>dispatch=>{
    console.log('---------post login ---------')
        fetch(server.backend+'user/login', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: data.email,
            password: data.password
        })
        }).then(
            res=>res.json()
        ).then(response=>{
            console.log('---')
            console.log(response)
            // var responseJson=JSON.parse(response);
            console.log(response.error)
            dispatch(loading(true))
            dispatch(setUserToken(response.usertoken))
            if(user.error){
                dispatch(error(error.message))
            }
            
            return response;
        }).catch(
            err=>{
                dispatch(error(err.message))
                console.log(err);

            }

        );
}