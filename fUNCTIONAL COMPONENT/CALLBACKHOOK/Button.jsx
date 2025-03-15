import React from "react";

const Body =({handlerClick,Children})=>{
    console.log("rendering button:-",Children)
    return(
        <div>
        <button onClick={handlerClick}>{Children}</button>
        </div>
    )
}

export default React.memo(Body);