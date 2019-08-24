import React from 'react';
import HomePage from './pages/hompage/homepage.comp';
import './App.css';
import {Route, Switch, } from 'react-router-dom';
import ShopPage from './pages/Shop/shop-page';



function App() {
  return (
    <div>
    <Switch>
      <Route exact  path='/' component={HomePage}/>
      <Route exact  path='/shop' component={ShopPage}/>
    </Switch>
    </div>
  );
}

export default App;
