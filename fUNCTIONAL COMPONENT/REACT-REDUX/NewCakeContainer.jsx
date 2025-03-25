import React ,{useState} from "react"; 
import {connect} from 'react-redux'
import { buyCake } from "./CakeAction";

const CakeContainer =(props)=>{
    const [price , setPrice] = useState(0)
    return (
        <div>
           <h1>Number Of Cakes - {props.numOfCakes}</h1> 
           <input typeof="text" value={price} onChange={(e)=>setPrice(e.target.value)} />
           <button onClick={()=>props.buyCake(price)}>Buy {price} cakes</button>
        </div>
        
    )
};

const mapStateToProps = state =>{
    return{
        numOfCakes : state.numOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyCake:(price)=> dispatch(buyCake(price))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);