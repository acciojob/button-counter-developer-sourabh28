
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[count, setCount] = useState(0);

  const increment = () => {
    setCount(count+1);
  }

  return (
    <div>
        {/* Do not remove the main div */}
    <p>Button licked {count} times!</p>
   <button onClick={increment}>Click me</button>
    </div>
  )
}

export default App
