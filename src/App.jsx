import CartValue from './components/CartValue';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <CartValue />
    </AppProvider>
  );
}

export default App;
