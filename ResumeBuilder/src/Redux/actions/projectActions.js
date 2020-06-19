import { SET_PROJECT,LOADING,ERROR} from './actionTypes';
import server from '../../config/config'


export const setProject = data => ({
    type: SET_PROJECT,
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


export const postProject =(data)=>dispatch=>{
    console.log('---------post Project  ---------')
        fetch(server.backend+'resume/projectinfo/', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            token:data.token
        },
        body: JSON.stringify({

            title:data.title,
            description:data.description

        })
        }).then(res=>res.json())
        .then(response=>{
            console.log(response)
            // dispatch(getResumeEducation())
        }).catch(err=>{
            dispatch(error);
        });
}

export const getResumeProject =(data)=>dispatch=>{
    console.log('---in get project --')
    console.log(data)
    fetch(server.backend+'resume/projectinfo',{
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
        console.log(json.projects)
        dispatch(setProject(json.projects));
        // dispatch(getHeading())

    })
    .catch((error) => {
      console.error(error);
    });
}
export const deleteProjectInfo =(data)=>dispatch=>{
    console.log('---in get delete project info --')
    console.log(data)
    fetch(server.backend+'resume/projectinfo/delete/'+data.id,{
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