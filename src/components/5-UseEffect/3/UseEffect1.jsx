import {useState,useEffect} from "react"

/*
useEffect with Dependencies [value]
Runs:

After the initial render

Every time any dependency changes

*/

function UseEffect1() {
    const [count1, setCount1] = useState(0); // number state
   const [count2, setCount2] = useState(0); // number state

  useEffect(() => {
  console.log("Component rendered -3 !");
  },[count1]);

  return (
    <>
        <h2> UseEffect-3 (WITH dependency Array)</h2>
       <div>
      <h2>Counter1:{count1}
        <br/>
        Counter-2{count2}</h2>


      <button onClick={() => setCount1(count1 + 1)}>Increase-1</button>
      <button onClick={() => setCount2(count2 + 1)}>Increase-2</button>
    </div>
    </>
  )
}

export default UseEffect1
