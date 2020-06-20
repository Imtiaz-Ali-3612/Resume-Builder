import { SET_EXPERIANCE, LOADING, ERROR} from './actionTypes';
import server from '../../config/config'

// export const getEducation = (data) => ({
//     type: GET_EDUCATION,
//     data:data,
// });

export const setExperiance = data => ({
    type: SET_EXPERIANCE,
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


export const postExperiance =(data)=>dispatch=>{
    console.log('---------post Experiance ---------')
        fetch(server.backend+'resume/experianceinfo/', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            token:data.token
        },
        body: JSON.stringify({
            job_title:data.job_title,
            from: data.from,
            to:data.to,
            details:data.details,

        })
        }).then(res=>res.json())
        .then(response=>{
            console.log(response)
            // dispatch(getResumeEducation())
        }).catch(err=>{
            dispatch(error);
        });
}

export const getResumeExperiance =(data)=>dispatch=>{
    console.log('---in get Resume --')
    console.log(data)
    fetch(server.backend+'resume/experianceinfo',{
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
        console.log(json.experiance)
        dispatch(setExperiance(json.experiance));
        // dispatch(getHeading())

    })
    .catch((error) => {
      console.error(error);
    });
}
export const deleteExperianceInfo =(data)=>dispatch=>{
    console.log('---in get delete experiance info --')
    console.log(data)
    fetch(server.backend+'resume/experianceinfo/delete/'+data.id,{
        method: 'GET',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token:data.token
        }
    })
    .then((response) => response.json())
    .then((json) => {
        console.log('---response')
        // console.log(json.education)

        // dispatch(setEducation(json.education));
        // dispatch(getHeading())

    })
    .catch((error) => {
      console.error(error);
    });
}