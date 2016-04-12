'use strict';

import React from 'react';
import HistoryManagement from './history-management.jsx';
import TodoList from './todo-list.jsx';
import AddItem from './add-item.jsx';

const App = () => (
    <div>
        <HistoryManagement/>
        <TodoList/>
        <AddItem/>
    </div>
)

export default App;
