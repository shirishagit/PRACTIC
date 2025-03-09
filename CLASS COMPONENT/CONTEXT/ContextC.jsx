import React,{Component} from "react";
import { Userconsumer } from "./ManiContext";

class ContextC extends Component {
    render(){
        return (
            <Userconsumer>
                {
                    (username)=>{
                        return(
                            <h1>{username}</h1>
                        )
                    }
                }
            </Userconsumer>
        )
    }
}

export default ContextC;