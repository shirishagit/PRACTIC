import React,{Component} from "react";
import ContextC from "./ContextC";

class ContextB extends Component{
    render(){
        return(
          <ContextC/>
        )
    }
}

export default ContextB;