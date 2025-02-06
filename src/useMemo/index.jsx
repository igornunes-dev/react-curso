import React, { useEffect, useMemo, useState } from 'react';
import P from 'prop-types';
import '../App.css';

const Post = ({ post }) => {
  console.log('filho rendereziou');

  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
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
};

function AppMemo() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  console.log('pai renderiou');

  //Component did Mount -> Executa so uma vez
  useEffect(() => {
    setTimeout(function () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  });

  return (
    <div className="App">
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {/* Mesma coisa do useCallback pode ser usado um valor ou componente para ser memorizado ou memoizada */}
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })
        );
      }, [posts])}
      {posts.length <= 0 && <p>AInda não existem posts.</p>}
    </div>
  );
}

export default AppMemo;
