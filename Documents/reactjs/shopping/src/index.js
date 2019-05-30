import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {Router} from 'react-router-dom';
import './index.css';
import App from './App';
import {ProductProvider} from './context';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( 
<ProductProvider><Router history={createBrowserHistory()}> <App /> </Router> </ProductProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
