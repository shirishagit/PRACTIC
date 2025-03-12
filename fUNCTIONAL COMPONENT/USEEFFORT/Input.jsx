import React,{useEffect,useState} from "react";

const Input = ()=> {
    const [student,changedName] = useState("")
     useEffect(()=>{
        console.log()
        document.title =`you changed ${student}`
    },[])

    return(
        <div>
        <input type="text" value={student} onChange={e=>changedName(e.target.value)}/>
        </div>
     )
}

export default Input