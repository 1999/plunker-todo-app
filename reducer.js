'use strict';

// every `history` element is an array of tasks
// `cursor` points to the currently active history step
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
    let itemIndex;

    switch (action.type) {
        case 'ADD':
            history = [
                // copy all history steps
                ...newCutHistory,
                // and create a new step
                [
                    ...newCutHistory[newCutHistory.length - 1] || [], // freshest history step
                    {
                        finished: false,
                        id: ++id,
                        title: action.payload.title
                    }
                ]
            ];

            return {
                history,
                cursor: history.length - 1
            };

            break;

        case 'TOGGLE_DONE':
            const newHistoryStep = newCutHistory[newCutHistory.length - 1]
            itemIndex = newHistoryStep.findIndex(item => (item.id === action.payload.id));

            history = [
                // copy all history steps
                ...newCutHistory,
                // and create a new step
                [
                    ...newHistoryStep.slice(0, itemIndex),
                    {
                        finished: !newHistoryStep[itemIndex].finished,
                        id: newHistoryStep[itemIndex].id,
                        title: newHistoryStep[itemIndex].title
                    },
                    ...newHistoryStep.slice(itemIndex + 1)
                ]
            ];

            return {
                history,
                cursor: history.length - 1
            };

            break;

        case 'REMOVE':
            const lastStepToRemove = newCutHistory.length - 1;

            history = [
                // copy all history steps
                ...newCutHistory,
                // and create a new step
                [
                    ...newCutHistory[lastStepToRemove].slice(0, lastStepToRemove - 1)
                ]
            ];

            return {
                history,
                cursor: history.length - 1
            };

            break;

        case 'UNDO':
            return {
                cursor: state.cursor - 1,
                history: state.history
            };

            break;

        case 'REDO':
            return {
                cursor: state.cursor + 1,
                history: state.history
            };

            break;

        default:
            return state;
    }
};

export default todoApp;
