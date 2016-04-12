'use strict';

const initialState = {
    cursor: -1,
    history: []
};

let id = 0;

// we can add/remove/etc item after we made some undos
// so first we need to cut off undo-ed items
const cutHistory = state => {
    return state.history.slice(0, state.cursor + 1);
};

const todoApp = (state = initialState, action) => {
    // this is useful for practically all tasks
    const newCutHistory = cutHistory(state);
    let history;

    switch (action.type) {
        case 'ADD':
            history = [
                ...newCutHistory,
                {
                    finished: false,
                    id: ++id,
                    title: action.payload.title
                }
            ];

            return {
                history,
                cursor: history.length - 1
            };

            break;

        case 'MARK_AS_DONE':
            const itemIndex = newCutHistory.findIndex(item => (item.id === action.payload.id));

            history = [
                ...newCutHistory.slice(0, itemIndex),
                {
                    finished: true,
                    id: newCutHistory[itemIndex].id,
                    title: newCutHistory[itemIndex].title
                }
                ...newCutHistory.slice(itemIndex + 1)
            ];

            return {
                history,
                cursor: history.length - 1
            };

            break;

        case 'MARK_AS_UNDONE':
            const itemIndex = newCutHistory.findIndex(item => (item.id === action.payload.id));

            history = [
                ...newCutHistory.slice(0, itemIndex),
                {
                    finished: false,
                    id: newCutHistory[itemIndex].id,
                    title: newCutHistory[itemIndex].title
                },
                ...newCutHistory.slice(itemIndex + 1)
            ];

            return {
                history,
                cursor: history.length - 1
            };

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
