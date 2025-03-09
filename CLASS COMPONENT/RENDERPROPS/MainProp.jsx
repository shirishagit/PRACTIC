import React,{Component} from "react";

class MainProp extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increase=()=>{
        this.setState(beforeNum =>{
            return{count:beforeNum.count+1}
        })
    }
    render(){
        return(
            <div>
                {this.props.name(this.state.count,this.increase)}
            </div>
        )
    }
}

export default MainProp;