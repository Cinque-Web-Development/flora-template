import React from 'react';
import {BrowserRouter as Switch, Route} from 'react-router-dom';

import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import Header from "./components/Header/Header";


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" render={() => 
          <LandingPage />
        }>
        </Route>
      </Switch>
    </>
  );
}

export default App;
