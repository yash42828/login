import React from 'react';
import { Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Product from './components/Product'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart/Cart'
import Default from './components/Default'
import {ButtonContainer} from './components/Button';
import Modal from './components/Modal';

function App() {
  return (
    <React.Fragment>
    <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={ProductList}/> 
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route component={Default}/>
      </Switch>
      <Modal />
    </React.Fragment>
   
  );
}

export default App;
