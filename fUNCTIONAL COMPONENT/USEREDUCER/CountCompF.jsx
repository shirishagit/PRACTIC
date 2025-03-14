import React,{useContext} from "react"
import { Count } from "../../../App"


const CountCompF =()=>{
       const CountContext = useContext(Count)
    return(
        
        <div>
            component F
            <button onClick={()=>CountContext.CountsetCount('Addition')}>Addition</button>
            <button onClick={()=>CountContext.CountsetCount('subraction')}>Subraction</button>
            <button onClick={()=>CountContext.CountsetCount('reset')}>Reset</button>
       
        </div>
    )
}

export default CountCompF