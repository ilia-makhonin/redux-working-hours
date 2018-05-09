import React from 'react';

function reducer(state = [], action) {
    switch (action.type) {
        case 'ADD_PROPERTY': {
            return [
                ...state,
                (<p className="item_playlist">{action.trackName}</p>)
            ];
        }
        default: return state;
    }
}

function newReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_PROPERTY': { return [...state, action.trackName]; }
        default: return state;
    }
}

export  { reducer, newReducer };