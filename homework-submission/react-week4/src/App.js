import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Week1 from './components/Week1/Week1';
import Week2 from './components/Week2/Week2';
import Week3 from './components/Week3/Week3';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/week1" component={Week1} />
          <Route exact path="/week2" component={Week2} />
          <Route exact path="/week3" component={Week3} />
          <Route component={PageNotFound} />
        </Switch>
        {/* <header className="App-header"></header> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
