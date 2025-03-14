import React,{ useContext } from "react";
import { UserContext,ChannelContext } from "../../../App";

// import ContextCompC from "./ContextCompc";


const ContextCompB =()=>{
     const user = useContext(UserContext)
     const Channel =  useContext(ChannelContext)
    return(
        <div>
            {user}-{Channel}
        </div>
    )
}

export default ContextCompB