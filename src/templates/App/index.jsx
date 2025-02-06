import Post from '../components/Posts/index';
import { PostsProvider } from '../contexts/PostsProvider';
import '../style.css';
export default function App() {
  return (
    <PostsProvider>
      <div>
        <Post />
      </div>
    </PostsProvider>
  );
}
