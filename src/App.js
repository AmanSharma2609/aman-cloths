import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from './pages/homepage/homepage'
import ShopPage from "./pages/shop/shop";

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' render={Homepage} />
      <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
