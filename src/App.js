import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from './pages/homepage/homepage'

const HatsPage = () => (
  <div>
    <h1>
      HATS PAGE
    </h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' render={Homepage} />
      <Route exact path='/hats' render={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
