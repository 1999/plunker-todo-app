'use strict';

import React from 'react'
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import todoApp from '../reducer';
import App from '../components/app.jsx';

const store = createStore(todoApp);

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.getElementById('root')
);
