'use strict';

import React from 'react';
import {connect} from 'react-redux';

let input;

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitItem: (evt) => {
            evt.preventDefault();

            dispatch({
                type: 'ADD',
                payload: {
                    title: input.value
                }
            });

            input.value = '';
        }
    };
};

const AddItem = ({onSubmitItem, onInputChange}) => {
    return (
        <form action="" onSubmit={onSubmitItem}>
            <input ref={node => input = node} defaultValue=""/>
            <button type="submit">Add</button>
        </form>
    )
};

export default connect(
    null,
    mapDispatchToProps
)(AddItem);
