import {useState,useEffect} from "react";



function App() {

    const[count,setCount]=useState("helo,im a boy");
     useEffect(() => {
      alert (" girl is female")
     },[]
    
    )//use effect //
  return (
      <> 

      <h1>{count}</h1>
       {count === "hello, I'm a boy" ? (
        <button onClick={() => setCount("hello, I'm a girl")}>
          Change to Girl
        </button>
      ) : (
        <button onClick={() => setCount("hello, I'm a boy")}>
          Change to Boy
        </button>
      )}
    </>
  );
}

export default App;