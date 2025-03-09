import React,{Component} from "react";

class RenderProps extends Component{
        render(){
            const {count,increase}=this.props
        return(
            <button onClick={increase}>clicked {count} times</button>
        )
    }
}

export default RenderProps;