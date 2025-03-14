import React from "react";  
import { UserContext,ChannelContext } from "../../../App";

const ContextCompC =()=>{
    return(
        <div>
            <UserContext.Consumer>
            {user=>{
                return (
                 <ChannelContext.Consumer>
                    {
                        Channel=>{return(<div>{Channel},{user}</div>)}
                    }
                 </ChannelContext.Consumer>
                )
            }}
            </UserContext.Consumer>
        </div>
    )
}

export default ContextCompC;