import React from 'react';
import HomePage from './pages/hompage/homepage.comp';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';


const HatPage =()=>
 (
  <div>
    <h1>Hats Page</h1>
  </div>
  );




function App() {
  return (
    <div>
    <Switch>
      <Route exact  path='/' component={HomePage}/>
      <Route exact  path='/hats' component={HatPage}/>
    </Switch>
    </div>
  );
}

export default App;
