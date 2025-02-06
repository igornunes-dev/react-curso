import React, { useEffect, useState } from 'react';

const App = () => {
    // useEffect(() => {
    //     console.log('Componente montado');
        
    //     // Configuração inicial
    //     const timer = setInterval(() => {
    //         console.log('Intervalo executado');
    //     }, 1000);

    //     // Função de limpeza
    //     return () => {
    //         clearInterval(timer); // Limpa o timer quando o componente for desmontado
    //         console.log('Componente desmontado e timer limpo');
    //     };
    // }, []); // [] significa que o efeito só executa na montagem e desmontagem



    const [count, setCount] = useState(() => {
      console.log("useState: initialState")
      return 0;
    })

    useEffect(() => {
      const interval = setInterval(() => {
        console.log(1);
      }, 1000)

      return () => clearInterval(interval);
    })

    console.log("Render");
    

    return (
        <div>
            <p>Meu Componente</p>
            <h1>Count {count}</h1>

            <button onClick={() => setCount(prevState => prevState + 1)}>Add +</button>
        </div>
    );
};


const Index = () => {
  const [on, toggle] = useState(true)
  return (
    <div>
      {on && <App />}
      <button onClick={() => toggle(prev => !prev)}>toggle</button>
    </div>
  );
}

export default Index;
