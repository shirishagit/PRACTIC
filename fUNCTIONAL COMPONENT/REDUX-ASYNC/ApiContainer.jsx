import React,{useEffect} from "react";
import { connect } from "react-redux";
import {FetchUsers} from './ApiAction'


const ApiContainer =({userData,FetchUsers})=>{
    useEffect(()=>{
        FetchUsers()
    })
    return <div> userData.loading ?(<h2>loading</h2>):userData.error?(<h2>{userData.error}</h2>):(<div><h2>user list</h2>
        <div>{
            userData && userData.users && userData.users.map(user=>user.name)
            }</div>
        </div>)
</div>

}

const mapStateToProps = state =>{
    return{
        userData : state.user
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        FetchUser: ()=>dispatch(FetchUsers())
    }
}

export default connect(mapDispatchToProps,mapStateToProps)(ApiContainer);