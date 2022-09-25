import React,{ useContext }   from "react";
import {context} from "../context/index"


function Counter() {
    const counter = useContext(context)
    return ( <div>


                <p>Counter : {counter.counter} </p>
                
                <button onClick={()=>counter.increment()}>
                    increment
                </button>

                <button onClick={()=>counter.decrement()}>
                  decrement
                </button>
                
                <button  onClick={()=>counter.addBy()}>
                    add By 20
                </button>




    </div> );
}

export default Counter;