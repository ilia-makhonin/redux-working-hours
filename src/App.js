import React, { Component } from 'react';
import { Link } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { connect } from 'react-redux';
import './App.css';

import reducer from './redusers';
import { asyncGetTracks } from './actions/tracks'

export const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

store.subscribe(() => {  });

class App extends Component {
    addTrack() {
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = '';
    }

    findTrack() {
        this.props.onFindTrack(this.findInput.value);
    }

    render() {
        return (
            <div className="wrapper">
                <div className="add_tracks">
                    <input type="text" ref={input => {this.trackInput = input}}/>
                    <button onClick={this.addTrack.bind(this)}>Add track</button>
                </div>

                <div className="find_tracks">
                    <input type="text" ref={input => {this.findInput = input}}/>
                    <button onClick={this.findTrack.bind(this)}>Find track</button>
                </div>

                <div className="get_tracks">
                    <button onClick={this.props.onGetTracks}>Get tracks</button>
                </div>

                <ul>
                    {
                        this.props.tracks.map((track, index) => {
                            return (
                            <Link to={`/tracks/${track.id}`} key={index}>
                                <li>{track.name}</li>
                            </Link>);
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    (state, ownProps) => ({
        tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)),
        ownProps
    }),

    dispatch => ({
        onAddTrack: (trackName) => {
            const payload = {
                id: Date.now().toString(),
                name: trackName
            };

            dispatch({ type: 'ADD_TRACK', payload})
        },

        onFindTrack: (name) => {
            dispatch({ type: 'FIND_TRACK', payload: name })
        },

        onGetTracks: () => {
            dispatch(asyncGetTracks());
        }
    })
)(App);