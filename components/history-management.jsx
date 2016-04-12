'use strict';

import React from 'react';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        undo: () => {
            dispatch({type: 'UNDO'});
        },

        redo: () => {
            dispatch({type: 'REDO'});
        }
    };
};

const HistoryManagement = ({undo, redo}) => {
    return (
        <div>
            <button type="button" onClick={undo}>Undo</button>
            <button type="button" onClick={redo}>Redo</button>
        </div>
    )
};

export default connect(
    null,
    mapDispatchToProps
)(HistoryManagement);
