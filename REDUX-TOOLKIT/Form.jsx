import { useDispatch } from "react-redux";
import { useState } from "react";

const Form =()=>{
  const dispatch =useDispatch()
  const [money,setMoney] = useState()
  const [FullName,UpdateFullName]=useState("")
  const [contact,setContact]=useState()
    return(
        <>
          <div className="Form-Update"style={{padding:"10px"}} >
            <h2>Form Update</h2>
        <div className="input-deposite" >
            <input type="number" placeholder="Enter Amount" value={money} onChange={(e)=>{setMoney(e.target.value)}} style={{
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '16px',
        width: '200px',
      }}
 />
 
            <button  type="button"  onClick={()=>{dispatch({type:"deposite",payload:money });setMoney("")}}>Deposite</button>
            <button onClick={()=>{dispatch({type:"withdraw",payload:money });setMoney("")}}>withdraw</button>
        </div>
        <div className="input-withdraw" >
            <input type="text" placeholder="Enter Name" value={FullName} onChange={(e)=>{UpdateFullName(e.target.value)}} style={{
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '16px',
        width: '200px',
      }}
 />
          <button onClick={()=>{dispatch({type:"nameUpdate",payload:FullName });UpdateFullName("")}}>UpDate Name</button>
        </div>
        <div className="input update"  >
        <input type="number"  placeholder="Enter Number" value={contact} onChange={(e)=>{setContact(e.target.value)}} style={{
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '16px',
        width: '200px',
      }}
 />
            <button onClick={()=>{dispatch({type:"mobileUpdate",payload:contact });setContact("")}}>mobile update</button>
        </div>
        <div>
            <button onClick={()=>{dispatch({type:"reset"})}}>reset</button>
        </div>
        </div>
        </>
    )
}

export default Form;