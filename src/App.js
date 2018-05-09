import React, { Component } from 'react';
import { createStore } from 'redux';
import './App.css';

import reducers from './reducers/reducer';

//------------------- Redux store -------------------

let music = {
    addMusic: [],
    musicSearch: []
};

for (let i = 1; i < 10; i++) {
    let trackName = 10 + i;
    music.addMusic.push(<p className="item_playlist">{trackName}</p>);
    music.musicSearch.push(trackName);
}

let store = createStore(reducers, music);

//------------------- React app -------------------

class App extends Component {
    constructor(props) {
        super(props);

        this.addSound = this.addSound.bind(this);
        this.searchSound = this.addSound.bind(this);
    }

    componentWillMount() {
        let subscribe = store.subscribe(() => this.forceUpdate());
        console.log(store.getState())
    }

    addSound() {
        let trackName = this.refs.sound;

        if (trackName.value === '') {
            return false;
        }

        store.dispatch({ type: 'ADD_PROPERTY', trackName: trackName.value });

        trackName.value = '';
    }

    searchSound() {
        store.dispatch({ type: 'SEARCH_SOUND', search: 12 })
    }

    render() {
        return (
            <div className="wrapper">
                <div className="playlist">
                    {
                        store.getState().addMusic.map((item, count) => {
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
