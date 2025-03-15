import React,{useEffect,useReducer} from "react";
import axios from 'axios';

const initialState = {
    post:{},
  

}
const reducer =(state,action)=>{
    switch(action.type){
        case "FETCH_SUCCESS":
         return{
         post:action.payload,
         }
         case"FECTH_ERROR":
         return{post:{},}
         
        default:return state
    }
}

const FetchData =()=>{
    const [state,dispatch]= useReducer(reducer,initialState)
   
   
    useEffect(()=>{
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(res=>{
            dispatch({type:"FETCH_SUCCESS",payload:res.data})
        })
        .catch(err=>{
            dispatch("cannot fetch data",err)
        })
    },[])

    return(
        <div>
            <h1>{state.post.title}</h1>
        </div>
    )
}

export  default FetchData;