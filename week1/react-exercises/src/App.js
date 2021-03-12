import "./App.css";
import HobbyList from "./1-hobbies/Hobbies";
import Guarantee from "./2-guarantee/Guarantee";
import Counter from "./3-counter/Counter";

function App() {
  return (
    <div className="main-container">
      <ul>
        <HobbyList />
      </ul>
      <h1>Guarantees:</h1>
      <Guarantee />
      <h1>Counter:</h1>
      <Counter />
    </div>
  );
}

export default App;
