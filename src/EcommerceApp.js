import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function EcomerceApp() {  

  return (
    <Router>
        <div className="block z-0 h-full bg-gray-100">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route exact path="/category/:category">
              <ItemListContainer />
            </Route>
            <Route exact path="/category/:category">
              <ItemListContainer />
            </Route>
            <Route exact path="/details/:id">
              <ItemDetailContainer />
            </Route>
          </Switch>
        </div>
    </Router>
  );
};

export default EcomerceApp;
