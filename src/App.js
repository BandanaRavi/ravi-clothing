import './App.css';
import HomePage from './pages/homepage/homepage.component';
import HatsPage from './pages/hatspage/hatspage.component';
import {Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div >
    <Switch>
    <Route exact path="/home" component = {HomePage} />
    <Route exact path="/home/hats" component={HatsPage} />
    </Switch>
    </div>
  );
}

export default App;
