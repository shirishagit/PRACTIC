import { useSelector } from "react-redux"



const Account = () =>{
    const data = useSelector((state)=>{
        return state
    })
  
    return(
        <>
            <div className="container" style={{padding:"10px"}} >
                <h1>Account Detailes </h1>
                <table className="table" >
                    <thead >
                        <tr style={{ border: '1px solid black'}}>
                            <th style={{ border: '1px solid black',padding:"10px"}}>Amount</th>
                            <th style={{ border: '1px solid black',padding:"10px"}}>Name</th>
                            <th style={{ border: '1px solid black',padding:"10px"}}>Mobile</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ border: '1px solid black',padding:"10px"}}>{data.amount}</td>
                            <td style={{ border: '1px solid black',padding:"10px"}}>{data.fullName}</td>
                            <td style={{ border: '1px solid black',padding:"10px"}}>{data.mobile}</td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Account

