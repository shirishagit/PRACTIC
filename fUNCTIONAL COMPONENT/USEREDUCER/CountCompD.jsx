import React,{useContext} from "react"
import { Count } from "../../../App"


const CountCompD =()=>{
       const CountContext = useContext(Count)
    return(
        
        <div>
            component D
            <button onClick={()=>CountContext.CountsetCount('Addition')}>Addition</button>
            <button onClick={()=>CountContext.CountsetCount('subraction')}>Subraction</button>
            <button onClick={()=>CountContext.CountsetCount('reset')}>Reset</button>
       
        </div>
    )
}

export default CountCompD