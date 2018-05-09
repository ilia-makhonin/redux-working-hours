export function createStore(reducer, initialState) {
    let state = initialState;
    let callbacks = [];

    const getState = () => state;

    const dispatch = action => {
        state = reducer(state, action);
        callbacks.forEach(callback => callback());
    };

    const subscribe = callback => {
        callbacks.push(callback);
        return () => {
            callbacks.filter(cb => cb !== callback);
        }
    };

    dispatch({});

    return{ getState, dispatch, subscribe };
}

export class Store {
    constructor(updateState, state) {
        this._state = state;
        this._updateState = updateState;
        this._callbacks = [];
    }

    update(action) {
        this._state = this._updateState(this._state, action);
        this._callbacks.forEach(callback => callback());
    }

    get state() {
        return this._state;
    }

    subscribe(callback) {
        this._callbacks.push(callback);
        return () => {
            this._callbacks = this._callbacks.filter(cb => cb !== callback);
        }
    }
}