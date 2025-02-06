import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

// Componente Button que usa memoização para evitar re-renderizações desnecessárias
const Button = React.memo(function Button({ incrementButton }) {
  console.log('Filho renderizou');
  return <button onClick={() => incrementButton(10)}>+</button>;
});

// Correção: `propTypes` e não `prototype`
Button.propTypes = {
  incrementButton: PropTypes.func.isRequired,
};

// Componente principal
function AppCallback() {
  // Estado do contador
  const [counter, setCounter] = useState(0);

  //Toda vez que a pagina é renderizada toda a função é renderizada novamente ate mesmo o counter e setCounter com useCallback na função
  //ele diz que não depende de counter, ou seja, não quer q ela atualize.

  // Função de incremento memoizada(ta em memoria salva) com useCallback
  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('Pai renderizou');

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default AppCallback;
