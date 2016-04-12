'use strict';

const initialState = {
    cursor: null,
    history: []
};

const todoApp = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            break;

        case 'MARK_AS_DONE':
            break;

        case 'MARK_AS_UNDONE':
            break;

        case 'REMOVE':
            break;

        case 'UNDO':
            break;

        case 'REDO':
            break;

        default:
            return state;
    }
};

export default todoApp;
