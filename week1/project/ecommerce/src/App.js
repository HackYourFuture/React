import './App.css';
import Products from './components/Products';
import ProductContext from './hooks/context';

function App() {
  return (
    <ProductContext>
      <Products />
    </ProductContext>
  );
}

export default App;
