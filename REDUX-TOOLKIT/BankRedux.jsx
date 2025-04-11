import { createStore } from "redux";

const initionalState ={
    amount:0,
    fullName:"",
    mobile: []
};


const reducer =(state=initionalState,action)=>{
      switch(action.type){
        case "deposite":return{
            ...state,amount:state.amount+ +action.payload
        };
        case "withdraw":return{
            ...state,amount:state.amount- +action.payload
        };
        case "nameUpdate":return{
            ...state,fullName:state.fullName+ action.payload
        };
        case "mobileUpdate":return{
            ...state,mobile:state.mobile+ action.payload
        };
        case "reset":return{
            initionalState
        };
        default:return state;
      }
}

const store =createStore(reducer)

export default store