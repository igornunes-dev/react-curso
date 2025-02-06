import * as types from './types';
export const reducer = (state, action) => {
  switch (action.type) {
    case types.POSTS_SUCESS: {
      console.log(action.type);

      return { ...state, posts: action.payload };
    }
  }

  console.log('Nenhuma action');

  return { ...state };
};
