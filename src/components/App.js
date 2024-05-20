
import React, { useState } from "react";
import './../styles/App.css';

const count = () => {
  const[count, setCount] = useState(1);
  console.log(count);

  const increment = () => {
    setCount(count+1);
  }
const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
    <p>Button licked {count} times!</p>
   <button onClick={increment}>Click me</button>
    </div>

  )
}
}
export default App
