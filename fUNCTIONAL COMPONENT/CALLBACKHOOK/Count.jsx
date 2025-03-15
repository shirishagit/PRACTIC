import React from "react";

const Count =({text,count})=>{
    console.log(`rendering ${text}`)
    return(
        <div>
          {text} - {count}  
        </div>
    )
}

export default React.memo(Count);