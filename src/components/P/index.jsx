import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

//eslint-disable-next-line
export const P = ({ children }) => {
  const theContext = useContext(GlobalContext);

  console.log(theContext);

  //Destruturação é feita para que não precisamos ficar colocando .Alguma coisa
  const {
    contextState: { body },
    //contextState
    setContextState,
  } = theContext;

  return (
    <p
      onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}
    >
      {body}
    </p>
  );
};
