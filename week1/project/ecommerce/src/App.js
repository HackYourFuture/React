// import logo from './logo.svg';
import './App.css';
import CategoryList from "./components/categories"
function App() {
  return (
    <div className="App">
      <h1>
        Products
      </h1>
      {CategoryList ()
      }
    </div>
  );
}

export default App;
