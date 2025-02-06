import { useState } from 'react';
import '../App.css';
import logo from '../logo.svg';

export default function App() {
  const [reverse, setReverse] = useState(false);
  const reverseClass = reverse ? 'reverse' : '';
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setReverse((reverse) => !reverse);
  };

  const handleIncrement = () => {
    setCount((counter) => counter + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h1>Contador: {count}</h1>
        <p>
          <button onClick={handleIncrement}>Contador</button>
        </p>
        <p>
          <button type="button" onClick={handleClick}>
            Reverse {reverseClass}
          </button>
        </p>
      </header>
    </div>
  );
}
