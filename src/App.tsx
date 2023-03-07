import { useState } from "react";
import "./App.css";

type Props = {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

function App({ value, onIncrement, onDecrement }: Props) {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      Clicked: {value} items
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}

export default App;
