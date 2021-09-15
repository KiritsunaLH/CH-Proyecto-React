import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';
import { CartContextProvider } from './components/AppContext/CartContext';
import Cart from "./components/containers/Cart/Cart"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function EcomerceApp() {  

  return (
    <CartContextProvider>
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
            <Route exact path="/detail/:id">
              <ItemDetailContainer />
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
          </Switch>
        </div>
    </Router>
    </CartContextProvider>
  );
};

export default EcomerceApp;
