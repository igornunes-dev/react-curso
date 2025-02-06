import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import AppMemo from './useMemo';
// import AppRef from './useRef';
import AppCallback from './useCallback';
// import App from './useContext';
// import App from './useReduce';
// import App from './useReduce+useContext';
// import App from './useEffect';
//import App from './Myhook';
// import App from './templates/App';
//import Home from './HookSecond/Home';
// import Home from './useAsync';
// import { Home } from './useLayoutEffect';
// import { Home } from './useImperativeHandle';
// import { Index } from './useDebugValue';
// import  Index  from './funcaoLimpeza';
// import { Home } from './hook-flow';
// import Index from './errorBoundaries';
// import Index from './cloneElement+React.children';
import Index from './react.lazy';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
