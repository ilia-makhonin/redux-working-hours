import React from 'react';

export default function addMusic(state = [], action) {
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