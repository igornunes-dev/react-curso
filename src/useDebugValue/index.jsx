import { useDebugValue, useEffect, useState } from 'react';

const useMediaQuery = (queryValue) => {
  const [match, setMatch] = useState(false);

  useDebugValue('Qualquer coisa');

  useEffect(() => {
    const matchMedia = window.matchMedia(queryValue);

    const handleChange = () => {
      setMatch(!!matchMedia.matches);
    };

    matchMedia.addEventListener('change', handleChange);
    setMatch(!!matchMedia.matches);

    // Função de limpeza -> é executada automaticamente pelo React quando quando o componente for desmontado
    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [queryValue]);

  return match;
};

export const Index = () => {
  const huge = useMediaQuery('(min-width: 980px)');
  const big = useMediaQuery('(max-width: 979px) and (min-width: 768px)');
  const medium = useMediaQuery('(max-width: 767px) and (min-width: 321px)');
  const small = useMediaQuery('(max-width: 321px)');
  const background = huge
    ? 'green'
    : big
      ? 'red'
      : medium
        ? 'yellow'
        : small
          ? 'purple'
          : null;

  return (
    <div style={{ background: background }}>
      <h1>Oi</h1>
    </div>
  );
};
