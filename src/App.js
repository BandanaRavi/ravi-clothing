import './App.css';
import HomePage from './pages/homepage/homepage.component';
// import HatsPage from './pages/hatspage/hatspage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header/header.component';
function App() {
  return (
    <div >
    <Header/>
    <Switch>
    <Route exact path="/home" component = {HomePage} />
    
    <Route exact path='/home/shop' component={ShopPage} />
    </Switch>
    </div>
  );
}

export default App;

