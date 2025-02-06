import { AppContext } from '../contexts/AppContext';
import { Div } from '../components/Div';
export default function App() {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
}
