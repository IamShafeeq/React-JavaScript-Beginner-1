import {useState,useEffect} from "react"
function UseEffect1() {
    const [count, setCount] = useState(0); // number state
  
  useEffect(() => {
  console.log("Component rendered -1 !");
  },[]);

  return (
    <>
        <h2> UseEffect-1 (WITH dependency Array)</h2>
       <div>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
    </>
  )
}

export default UseEffect1
