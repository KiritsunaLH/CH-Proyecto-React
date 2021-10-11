import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';
import { CartContextProvider } from './components/AppContext/CartContext';
import { Cart } from './components/containers/Cart/Cart';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function EcomerceApp() {  

  return (
    <CartContextProvider>
    <Router >
        <NavBar />
        <div  id="secciondos" className="container-fluid ">
        <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route exact path="/category/:cat" component={ItemListContainer}/>
            <Route path="/detail/:detailId" component={ItemDetailContainer}/>
            <Route exact path="/cart" component={Cart}/>
          </Switch>
        </div>
      </Router>
    </CartContextProvider>
  );
};

export default EcomerceApp;
