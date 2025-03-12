import React,{useState,useEffect} from "react";

const MouseEffect =()=>{
    const[X,posX] = useState(0)
    const[Y,posY] = useState(0)

    const logMousePosition =(e)=>{
        console.log ("mouse event")
        posX(e.clientX)
        posY(e.clientY)
    }
    useEffect(()=>{
        console.log("mouse effect")
        window.addEventListener("mousemove",logMousePosition)

        return()=>{
            window.removeEventListener("mousemove",logMousePosition)
        }
    },[])
    return(
        <div>
            Mouse Position X : {X}
            Mouse Position Y : {Y}
        </div>
    )
}

export default MouseEffect;