//import combineReducers and createStore to make the redux store 
import {combineReducers, createStore} from 'redux';
import {carReducer} from './reducer/reducer';
import {Provider} from 'react-redux';

//import reducers 
import * as reducers from './reducer/reducer';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

//Attempted to use a monster reducer, but PCR showed me this was unnecessarily
// const godzillaReducer = combineReducers({state:reducers.carReducer});
const store = createStore(carReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, rootElement);
