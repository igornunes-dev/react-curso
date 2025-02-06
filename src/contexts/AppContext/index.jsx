import { createContext, useState } from 'react';
import { globalState } from './data';

//Criação do Context, que é um componente React
export const GlobalContext = createContext();

//eslint-disable-next-line
export const AppContext = ({ children }) => {
  const [contextState, setContextState] = useState(globalState);
  return (
    //Usa o Context.Provider que passa o value com o objeto de estado inicial, esse value é passado para dentro de todos os filhos desse componentes
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      {children}
    </GlobalContext.Provider>
  );
};
