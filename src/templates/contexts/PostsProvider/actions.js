import * as types from './types';
export const loadPoster = async (dispatch) => {
  const postsRaw = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postsRaw.json();
  //espera a requisição e a transformação para json
  dispatch({ type: types.POSTS_SUCESS, payload: posts });
};
