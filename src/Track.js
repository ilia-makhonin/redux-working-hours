import React from 'react';
import { connect } from 'react-redux';

const Track = ({ track }) => <div>{track ? track.name : 'Track'}</div>;

const mapStateToProps = (state, ownProps) => {
    return {
        track: state.tracks.find(track => track.id === Number(ownProps.params.id))
    };
};

export default connect(mapStateToProps)(Track);