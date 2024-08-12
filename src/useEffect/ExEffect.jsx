//UseEffect -> Toda vez que o componente for montado ou atualiza ele é chamado
import { useState, useEffect } from 'react';

const eventoClick = () => {
  console.log('h1 clicado');
};

export default function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  //componentDidUpdate -> executa toda vez que o componente atualiza
  // useEffect(() => {
  //   console.log('componentDidUpdate');
  // });

  //componentDidMount -> executa apenas uma vez
  useEffect(() => {
    document.querySelector('h1').addEventListener('click', eventoClick);

    // componentWillUmount - limpeza quando o componente for desmontado
    return () => {
      document.querySelector('h1').removeEventListener('click', eventoClick);
    };
  }, []);

  //Com dependência -> executa toda vez que a dependência mudar
  useEffect(() => {
    console.log('C1', counter, 'C2', counter2);
  }, [counter, counter2]);

  return (
    <div className="App">
      <p>Teste 1</p>
      <h1>
        C1: {counter} C2: {counter2}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>+ (1)</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+ (2)</button>
    </div>
  );
}
