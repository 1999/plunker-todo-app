'use strict';

import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        todos: state.history[state.cursor] || []
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch({
                id,
                action: 'TOGGLE_DONE'
            });
        }
    };
};

const TodoList = (props) => {
    return (
        <ul>
        {props.todos.forEach(todo => {
            <li onClick={onTodoClick(todo.id)}>{todo.title}</li>
        })}
        </ul>
    )
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
