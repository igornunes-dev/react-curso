import { useCallback, useEffect, useState } from 'react';

const useAsync = (asyncFunction, shouldRun) => {
  const [state, setState] = useState({
    result: null,
    error: null,
    status: 'idle',
  });

  //Memoiza a função para que não seja recriada, a menos que o asyncFunction mude
  const run = useCallback(() => {
    console.log(new Date().toLocaleString);
    setState({
      result: null,
      error: null,
      status: 'pending',
    });

    return asyncFunction()
      .then((response) => {
        setState({
          result: response,
          error: null,
          status: 'completty',
        });
      })
      .catch((err) => {
        setState({
          result: null,
          error: err,
          status: 'error',
        });
      });
  }, [asyncFunction]);

  //so executa se run ou shouldRun mudar
  useEffect(() => {
    if (shouldRun) {
      run();
    }
  }, [run, shouldRun]);

  return [run, state.result, state.error, state.status];
};

const fecthData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const json = await data.json();
  return json;
};

const Home = () => {
  const [post, setPost] = useState(null);
  //Hook personalizado
  const [reFetchData, result, error, status] = useAsync(fecthData, true);
  if (status === 'idle') {
    return <pre>idle: Nada executando</pre>;
  }
  if (status === 'pending') {
    return <pre>pending: Loading...</pre>;
  }
  if (status === 'error') {
    return <pre>error: {error.message}</pre>;
  }
  if (status === 'completty') {
    return <pre>completty: {JSON.stringify(result, null, 2)}</pre>;
  }
  return 'algo deu errado.';
};

export default Home;
