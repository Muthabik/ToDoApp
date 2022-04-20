import React,{useState,useEffect} from 'react';

function Counter() {
    const [count,setCount] =useState(0)
    const [count2,setCount2] =useState(0)
    useEffect(()=>{
    console.log('Mounting...');
    console.log('count 1...'+count);
    console.log('count 2...'+count2);
   
   
    },[count,count2])
  return <div>
      <button onClick={()=>setCount(count+1)}> increment</button>
      <h1> Hello Iam Component 1 ;{count}</h1>

      <button onClick={()=>setCount2(count2+1)}> increment</button>
      <h1> Hello Iam Component 2 ;{count2}</h1>
  </div>;
}

export default Counter
;
