import React,{useEffect , useState , useRef} from "react";

const TimerRef = ()=>{
    const [timer,setTimer] = useState(null)
    const TimerRef = useRef()

    useEffect(()=>{
        TimerRef.current =setInterval(() => {
            setTimer(prevState=>prevState+1)    
            },1000);
            return ()=>{
                clearInterval( TimerRef.current)
             }
        },[])
      
       return(
        <div>
            {timer}
        <button onClick={()=>clearInterval(TimerRef.current)}>Stop timer</button>
        </div>
        
    )
}

export default TimerRef;
