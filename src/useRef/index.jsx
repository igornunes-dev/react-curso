import React, { useEffect, useMemo, useRef, useState } from 'react';
import P from 'prop-types';
import '../App.css';

const Post = ({ post, handleClick }) => {
  console.log('filho rendereziou');

  return (
    <div key={post.id} className="post">
      <h1 style={{ fontSize: '14px' }} onClick={() => handleClick(post.title)}>
        {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleClick: P.func,
};

function AppRef() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  //Cria um referência para alguma coisa que por enquanto é null.
  const input = useRef(null);
  const contador = useRef(0);
  console.log('pai renderiou');

  //Component did Mount -> Executa so uma vez
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  useEffect(() => {
    input.current.focus();
    console.log(input.current);
  }, [value]);

  useEffect(() => {
    contador.current++;
  });

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <h1>Redezizou : {contador.current}x</h1>
      <input
        //valor da referência - vai atrelar o valor do input na propriedade current no Ref
        ref={input}
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {/* Mesma coisa do useCallback pode ser usado um valor ou componente para ser memorizado ou memoizada */}
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} handleClick={handleClick} />;
          })
        );
      }, [posts])}
      {posts.length <= 0 && <p>AInda não existem posts.</p>}
    </div>
  );
}

export default AppRef;
