'use strict';

import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        undoDisabled: state.cursor === -1 || !state.history.length,
        redoDisabled: state.cursor === state.history.length - 1
    }
};

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

const HistoryManagement = ({
    undo,
    undoDisabled,
    redo,
    redoDisabled
}) => {
    return (
        <div>
            <button disabled={undoDisabled} type="button" onClick={undo}>Undo</button>
            <button disabled={redoDisabled} type="button" onClick={redo}>Redo</button>
        </div>
    )
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HistoryManagement);
