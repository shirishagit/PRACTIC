import { createStore } from "redux";

const initionalState ={
    amount:1000,
    balance:1000,
    fullName:"shirisha"
};


const reducer =(state=initionalState,action)=>{
      switch(action.type){
        case "deposite":return{
            ...state,amount:state.amount+action.payload
        };
        case "withdraw":return{
            ...state,balance:state.balance+action.payload
        };
        case "nameUpdate":return{
            ...state,fullName:state.fullName+action.payload
        };
        default:return state;
      }
}

const store =createStore(reducer)

export default store