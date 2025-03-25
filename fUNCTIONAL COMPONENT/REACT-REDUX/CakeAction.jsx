import { BUY_CAKE } from "./CakeTypes"

export const buyCake =(price=0)=>{
    return {
        type:BUY_CAKE,
        payload:price
    }
}