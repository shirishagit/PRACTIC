import React,{Component} from "react";


class HttpGet extends Component{
    constructor(){
        super()
        this.state={
            post:[]
        }
    }
    //  componentDidMount(){
    //     axios.get(`https://jsonplaceholder.typicode.com/posts`)
    //     .then(responce=>{
    //         console.log(responce)
            
    //     })
    //     .catch(error=>{
    //         console.log(error)
    //     })
    //  }
    render(){
        return(
            <div>
                hello
            </div>
        )
    }
}

export default HttpGet;