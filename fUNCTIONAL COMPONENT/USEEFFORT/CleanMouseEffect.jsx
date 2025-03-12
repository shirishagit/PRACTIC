import React,{useState,useEffect} from "react";
import MouseEffect from "./MouseEffect";

const CleanMouseEffect=()=>{
    const [display,offDisplay] = useState(true)

    return(
        <div>
        <button onClick={()=>offDisplay(!display)}>Display mouseEffect</button>
        {display && <MouseEffect/>} 
        </div>
    )
}

export default CleanMouseEffect;