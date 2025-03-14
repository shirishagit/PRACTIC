import React,{useReducer} from "react";

const initionalState = 0
const reducer=(state,action)=>{

    switch (action) {
        case 'Addition':
            return state +1
        case 'subraction':
            return state -1    
        case 'Reset':
            return initionalState  
        default:
            return initionalState
        
    }
    
}


const Counter =()=>{
    const [count,setCount]=useReducer(reducer,initionalState)
    return(
        <div>
            <h1>Count : {count}</h1>
            <button onClick={()=>{setCount('Addition')}}>Addition</button>
            <button onClick={()=>{setCount('subraction')}}>Subraction</button>
            <button onClick={()=>{setCount('reset')}}>Reset</button>
        </div>
    )
}

export default Counter;