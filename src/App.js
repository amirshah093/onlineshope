import React from 'react';
import HomePage from './pages/hompage/homepage.comp';
import './App.css';
import {Route, Switch, } from 'react-router-dom';
import ShopPage from './pages/Shop/shop-page';
import Header from './components/header'
import ContactPage from '../src/pages/contact/contact-page'
import SignInAndSignUp from './pages/Signin-and-signup/Signin-and-signup';
import {auth, createUserProfileDocument} from './firebase/firebase-util';




class App extends React.Component {
  constructor() {
    super();
    this.state={
      currentuser: null
    }
  }

  unsubscribFromAuth = null;

  componentDidMount(){
    this.unsubscribFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentuser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
        console.log(this.state);

      }
      this.setState({currentuser: userAuth});
    });
  }

  componentWillUnmount(){
    this.unsubscribFromAuth();
  }

  render(){
    return (
    <div>
    <Header currentuser={this.state.currentuser}/>
    <Switch>
      <Route exact  path='/' component={HomePage}/>
      <Route exact  path='/shop' component={ShopPage}/>
      <Route exact  path='/signin' component={SignInAndSignUp}/>
      <Route exact  path='/contact' component={ContactPage}/>
    </Switch>
    </div>
  );
  }
}

export default App;
