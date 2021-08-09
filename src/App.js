import './App.css';
import HomePage from './pages/homepage/homepage.component';
// import HatsPage from './pages/hatspage/hatspage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUppage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import React from 'react'
import {auth} from './firebase/firebase.utils.js';
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currentUser: null,
    }
  }
  render(){
    return (
      <div >
      <Header/>
      <Switch>
      <Route exact path="/home" component = {HomePage} />
      
      <Route exact path='/home/shop' component={ShopPage} />
      <Route exact path='/home/signin' component={SignInAndSignUppage} />
      </Switch>
      </div>
    );
  }

}

export default App;

