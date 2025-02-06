import { useReducer } from 'react';

const globalState = {
  title: 'O titulo do contexto',
  body: 'O body do contexto',
  counter: 0,
};
//Usa o state e a action para calcular e retornar um novo estado.
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'muda': {
      console.log('chamou muda', payload);
      return { ...state, title: payload };
    }
    case 'inverter': {
      console.log('Chamou inverter');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }
  console.log('Nenhum action encontrada');

  return { ...state };
};

export default function App() {
  //UseReducer manipula seu estado mais complexos
  //Recebe uma função e o estado inicial
  //Retorna o state atual e uma função dispatch que ela dispara ações

  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title } = state;

  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button
        onClick={() =>
          dispatch({
            type: 'muda',
            payload: new Date().toLocaleString('pt-BR'),
          })
        }
      >
        Click
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Inverte</button>
      <button onClick={() => dispatch({ type: '' })}>Erro</button>
    </div>
  );
}
