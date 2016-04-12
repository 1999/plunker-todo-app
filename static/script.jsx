'use strict';

import React from 'react'
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';

import todoApp from '../reducer';
import App from '../components/app.jsx';

const store = createStore(
    todoApp,
    applyMiddleware(createLogger())
);

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.getElementById('root')
);
