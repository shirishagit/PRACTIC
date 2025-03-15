import React from "react";

const Title =()=>{
    console.log("title")
    return(
        <div>
            <h1>CallBack Hook</h1>
         
        </div>
    )
}

export default React.memo(Title);