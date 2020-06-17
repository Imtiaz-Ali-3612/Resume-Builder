import { GET_EDUCATION,SET_EDUCATION} from './actionTypes';
import AsyncStorage from '@react-native-community/async-storage';
import server from '../../config/config'

export const getEducation = (data) => ({
    type: GET_EDUCATION,
    data:data,
});

export const setEducation = data => ({
    type: SET_EDUCATION,
    data:data
});


export const loading = bool => ({
    type:  LOADING,
    data: bool,
});

export const error = error => ({
    type: ERROR,
    data:error,
});


export const postEducation =(data)=>dispatch=>{
    console.log('---------post Heading ---------')
        fetch(server.backend+'resume/educationinfo/', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            token:data.token
        },
        body: JSON.stringify({
            school:data.school,
            grade:data.grade,
            title:data.title

        })
        }).then(res=>res.json())
        .then(response=>{
            console.log(response)
            dispatch(getEducation())
        }).catch(err=>{
            dispatch(error);
        });
}

export const getResumeEducation =(data)=>dispatch=>{
    console.log('---in get Resume --')
    console.log(data)
    fetch(server.backend+'resume/educationinfo',{
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
        console.log(json.education)
        dispatch(setEducation(json.education));
        // dispatch(getHeading())

    })
    .catch((error) => {
      console.error(error);
    });
}