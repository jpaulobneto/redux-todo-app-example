import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Root } from './components/Root/Root';
import { configureStore } from './services/configureStore/configureStore';
import * as serviceWorker from './services/serviceWorker/serviceWorker';

const store = configureStore();
ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
