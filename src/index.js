//import combineReducers and createStore to make the redux store 
import {combineReducers, createStore} from 'redux';

//import reducers 
import * as reducers from './reducer/reducer';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const godzillaReducer = combineReducers({state:reducers.carReducer});
const store = createStore();

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
