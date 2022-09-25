import React, {  useState } from 'react';
import Counter from './components/counter';
import {context} from "./context/index"


function App (){
  const [counter,setCounter] = useState(0)
   const increment =()=>{
    setCounter(counter+1)

   }
   const decrement =()=>{
    setCounter(counter-1)

  }
  const addBy =()=>{
    setCounter(counter+20)

  }
    return (
      <context.Provider value={{counter,increment,decrement,addBy}}>
            <div className="App">
              <Counter/>
             </div>
      </context.Provider>

    );
  
}

export default App;
