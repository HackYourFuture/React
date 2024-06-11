import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import Home from './Home';
import { useState } from 'react';

function App() {
  const [activeProductInfo, setActiveProductInfo] = useState({});

  return (
    <div className='App'>
      <h1>Products</h1>
       <Router>
        <Routes>
          <Route path='/' element={<Home setActiveProductInfo={setActiveProductInfo}/>}/>
          <Route path={'product/:id'} element={<ProductDetails activeProductInfo={activeProductInfo}/>}/>
        </Routes>
      </Router> 
    </div>
  )
}

export default App;