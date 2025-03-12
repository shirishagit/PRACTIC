import React,{useState,useEffect} from "react";

const SetIntervel =()=>{
    const [count,runcount] = useState(0)

   const tick=()=>{
        runcount(count+1)
    }
     
    useEffect(()=>{
      const interval = setInterval(tick,1000)
    return()=>{
        clearInterval(interval)
    }
    },[count])

    return(
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default SetIntervel;