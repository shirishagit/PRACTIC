import {FETCH_REQUSET,FETCH_SUCCESS,FETCH_FAILURE} from './ApiType'


const initialState = {
    loading:false,
    users:[],
    error:""
}

const reducer =(state = initialState,action)=>{
       switch(action.type){
        case FETCH_REQUSET:
            return{
                ...state,
                loading:true,
            }
        case FETCH_SUCCESS:
            return{
                loading:false,
                users:action.payload,
                error:""
            }
            case FETCH_FAILURE:
            return{
                loading:false,
                users:[],
                error:action.payload
            }
            default :return state
       }
}


export default reducer; 
