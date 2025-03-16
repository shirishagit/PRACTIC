import React,{useRef,useEffect} from "react";

const RefHook =()=>{
    const FocuseRef = useRef()

    useEffect(()=>{
        FocuseRef.current.focus()
    },[])

    return(
        <div>
            <input ref={FocuseRef} type="text" />
        </div>
    )
}

export default RefHook