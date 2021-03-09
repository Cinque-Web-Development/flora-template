import React from 'react';
import {BrowserRouter as Switch, Route} from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => 
      <LandingPage />
    }>
      </Route>
    </Switch>
  );
}

export default App;
