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
        onTodoClick: id => evt => {
            dispatch({
                type: 'TOGGLE_DONE',
                payload: {id}
            });
        },

        onTodoRemove: id => evt => {
            dispatch({
                type: 'REMOVE',
                payload: {id}
            });
        }
    };
};

const TodoList = ({todos, onTodoClick, onTodoRemove}) => {
    return (
        <ul>
        {todos.map((todo, index) => {
            return (
                <li key={index} onClick={onTodoClick(todo.id)}>
                    {todo.title}
                    <a href="" onClick={onTodoRemove(todo.id)}></a>
                </li>
            )
        })}
        </ul>
    )
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
