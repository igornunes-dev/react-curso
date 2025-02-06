import React, { useContext, useEffect } from 'react';
import { loadPoster } from '../../contexts/PostsProvider/actions';

export default function Post() {
  const postsContext = useContext(postsContext);
  const { postsState, postsDispatch } = postsContext;

  useEffect(() => {
    loadPoster(postsDispatch);
  }, [postsDispatch]);

  return (
    <div>
      <h1>POSTS</h1>
      {postsState.posts.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
}
