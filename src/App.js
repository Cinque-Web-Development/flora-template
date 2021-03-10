import React from 'react';
import {BrowserRouter as Switch, Route} from 'react-router-dom';

import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import Header from "./components/Header/Header";
import HousePlantsPage from './pages/HousePlantsPage/HousePlantsPage';
import FlowersPage from './pages/FlowersPage/FlowersPage';
import SucculentsPage from './pages/SucculentsPage/SucculentsPage';
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from './pages/ContactPage/ContactPage';


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" render={() => 
          <LandingPage />
        }>
        </Route>
        <Route exact path="/houseplants" render={() => 
        <HousePlantsPage />
        }>
        </Route>
        <Route exact path="/flowers" render={() => 
        <FlowersPage />
        }>
        </Route>
        <Route exact path="/succulents" render={() =>
        <SucculentsPage />
        }>
        </Route>
        <Route exact path="/about" render={() =>
          <AboutPage />
        }>
        </Route>
        <Route exact path="/contact" render={() => 
        <ContactPage />
        }>
        </Route>
      </Switch>
    </>
  );
}

export default App;
