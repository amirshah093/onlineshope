import React from 'react';
import HomePage from './pages/hompage/homepage.comp';
import './App.css';
import {Route, Switch, } from 'react-router-dom';
import ShopPage from './pages/Shop/shop-page';
import {connect} from 'react-redux';
import Header from './components/header'
import { setCurrentUser } from './redux/user/user.action.reducer';
import ContactPage from '../src/pages/contact/contact-page'
import SignInAndSignUp from './pages/Signin-and-signup/Signin-and-signup';
import {auth, createUserProfileDocument} from './firebase/firebase-util';




class App extends React.Component {
  unsubscribFromAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unsubscribFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribFromAuth();
  }

  render(){
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
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch (setCurrentUser(user))
})

export default connect(null, mapDispatchToProps )(App);
