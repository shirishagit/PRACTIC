import React,{useState} from "react";

function Counter(){
    const [count,increaseCount]=useState(0)

    return(
        <div>
         <button onClick={()=>increaseCount(count+1)}>count {count}</button>
        </div>
    )
}

export default Counter