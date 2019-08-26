import React from 'react';
import HomePage from './pages/hompage/homepage.comp';
import './App.css';
import {Route, Switch, } from 'react-router-dom';
import ShopPage from './pages/Shop/shop-page';
import Header from './components/header'
import ContactPage from '../src/pages/contact/contact-page'
import SignInAndSignUp from './pages/Signin-and-signup/Signin-and-signup';




const App =()=> {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact  path='/' component={HomePage}/>
      <Route exact  path='/shop' component={ShopPage}/>
      <Route exact  path='/signin' component={SignInAndSignUp}/>
      <Route exact  path='/contact' component={ContactPage}/>
    </Switch>
    </div>
  );
}

export default App;
