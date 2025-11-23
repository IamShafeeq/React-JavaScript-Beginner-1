import {useState,useEffect} from "react"

/*

useEffect with NO Dependency Array
Runs after every render (initial + updates).


*/

function UseEffect1() {
    const [count, setCount] = useState(0); // number state
  
  useEffect(() => {
  console.log("Component rendered -1 !");
  });

  return (
    <>
        <h2> UseEffect-1 (without dependency Array)</h2>
       <div>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
    </>
  )
}

export default UseEffect1
