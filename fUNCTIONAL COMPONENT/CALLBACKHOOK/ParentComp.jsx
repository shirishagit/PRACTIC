import React,{useState , useCallback} from "react";
import Title from "./Title";
import Count from "./Count"
import Button from "./Button"






function ParentComp(){
    const [age,setAge]=useState(21)
    const [salary,setSalary]=useState(30000)

    const IncrementAge = useCallback(()=>{
        setAge(age+1)
    },[age])
    
    const IncrementSalary =useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
    return(
    <div>
        <Title></Title>
        <Count text="age" count={age}></Count>
        <Button handlerClick={IncrementAge}>increase age</Button>
        <Count text={"salary"} count={salary}></Count>
        <Button handlerClick={IncrementSalary}>Increment salary</Button>
    </div>
    )
}

export default ParentComp;

