import React, { Component } from 'react';
import { createStore } from 'redux';
import './App.css';

import { reducer, newReducer } from "./reducer";

//------------------- Redux store -------------------

let store = createStore(reducer);

for (let i = 1; i < 10; i++) {
    let trackName = 10 + i;
    store.dispatch({ type: 'ADD_PROPERTY', trackName });
}

//------------------- React app -------------------

class App extends Component {
    constructor(props) {
        super(props);

        this.addSound = this.addSound.bind(this);
    }

    componentWillMount() {
        let subscribe = store.subscribe(() => this.forceUpdate());
    }

    addSound() {
        let trackName = this.refs.sound.value;

        if (trackName === '') {
            return false;
        }

        store.dispatch({ type: 'ADD_PROPERTY', trackName });
    }

    render() {
        return (
            <div className="wrapper">
                <div className="playlist">
                    {
                        store.getState().map((item, count) => {
                            return (
                                <div key={count}>
                                    {item}
                                    <br/>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="add_sound">
                    <input type="text" className="sound_name" ref="sound"/>
                    <button
                        className="add_sound_button"
                        onClick={this.addSound}
                    >
                        Добавить песню
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
