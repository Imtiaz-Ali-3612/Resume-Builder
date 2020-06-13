import { GET_HEADING,SET_HEADING} from './actionTypes';
import AsyncStorage from '@react-native-community/async-storage';
import server from '../../config/config'

export const getHeading = (heading) => ({
    type: GET_HEADING,
    data:heading,
});

export const setHeading = heading => ({
    type: SET_HEADING,
    data:heading
});


export const loading = bool => ({
    type:  LOADING,
    data: bool,
});

export const error = error => ({
    type: ERROR,
    data:error,
});


export const postHeading =(data)=>dispatch=>{
    console.log('---------post Heading ---------')
        fetch(server.backend+'resume/userinfo', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            token:data.token
        },
        body: JSON.stringify({
            name:data.name,
            mobile: data.mobile,
            linkedIn: data.linkedIn,
            introduction:data.introduction

        })
        }).then(res=>res.json())
        .then(response=>{
            console.log(response)
            dispatch(getHeading())
        }).catch(err=>{
            dispatch(error);
        });
}

export const getResumeHeading =(data)=>dispatch=>{
    console.log('---in get Resume --')
    console.log(data)
    fetch(server.backend+'resume/userinfo',{
        method: 'GET',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token:data
        }
    })
    .then((response) => response.json())
    .then((json) => {
        console.log('---response')
        console.log(json)
        dispatch(setHeading(json.user));
        // dispatch(getHeading())

    })
    .catch((error) => {
      console.error(error);
    });
}