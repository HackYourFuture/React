import './App.css';
import Friend from './components/Friends';
import DogGallery from './components/DogGallery';
import RandomJoke from './components/RandomJoke';

function App() {
  return (
    <div className="App">
     <Friend />
     <DogGallery />
     <RandomJoke />
    </div>
  );
}

export default App;
