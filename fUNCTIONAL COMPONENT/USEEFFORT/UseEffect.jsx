import React,{useState,useEffect} from "react";

function CounterTwo(){
    const [count,increaseCount]=useState(0)

    useEffect(()=>{
        document.title=`You clicked ${count} times`
    })

    return(
        <div>
         <button onClick={()=>increaseCount(count+1)}>count {count}</button>
        </div>
    )
}

export default CounterTwo