import React,{useState,useMemo} from "react";

const MemoHook =()=>{
    const[buttonOne,AddButtonOne] = useState(0)
    const[buttonTwo,AddButtonTwo] = useState(0)

    const incrementOne =()=>{
        AddButtonOne(buttonOne+1)
    }

    const incrementTwo =()=>{
        AddButtonTwo(buttonTwo+1)
    }

    const isEven = useMemo(()=>{
        let i =0
        while(i<20000000)i++
        return buttonOne % 2 === 0
    },[buttonOne])

    return(
        <div>
            <div>
                <button onClick={incrementOne}>Click {buttonOne}</button>
                <span>{isEven ? "even": "odd"}</span>
            </div>
            <div><button onClick={incrementTwo}>Click {buttonTwo}</button></div>
        </div>
    )
}

export default MemoHook;