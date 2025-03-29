import axios from 'axios'
import {FETCH_REQUSET,FETCH_SUCCESS,FETCH_FAILURE} from './ApiType'

 const fetchRequest=()=>{
    return{
        type:FETCH_REQUSET
    }
}
 const fetchSuccess=(users)=>{
    return{
        type:FETCH_SUCCESS,
        payload:users
    }
}

 const fetchFailure=(error)=>{
    return{
        type:FETCH_FAILURE,
        payload:error
    }
};

export const FetchUsers =()=>{
    return(dispatch)=>{
        dispatch(fetchRequest)
       axios.get('https://jsonplaceholder.typicode.com/users')
       .then(responce =>{
        const users = responce.data
        dispatch(fetchSuccess(users))
       })
       .catch(error=>{
        const errorMsg = error.message
        dispatch(fetchFailure(errorMsg))
       })
    }
}


