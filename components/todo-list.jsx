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
            evt.stopPropagation();
            evt.preventDefault();

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
        {todos.map(({title, id, finished}, index) => {
            return (
                <li style={ {
                  textDecoration: finished ? 'line-through' : 'none'
                } } key={index} onClick={onTodoClick(id)}>
                    {title}
                    <a style={{marginLeft: '8px'}} href="" onClick={onTodoRemove(id)}>(remove)</a>
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
