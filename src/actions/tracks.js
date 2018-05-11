let mocApiData = [
    {
        id: 1,
        name: 'Enter Sandman'
    },
    {
        id: 2,
        name: 'Welcome Home'
    },
    {
        id: 3,
        name: 'Master of Puppets'
    },
    {
        id: 4,
        name: 'Fade to Black'
    },
    {
        id: 5,
        name: 'Small Like Spirit'
    }
];

export const asyncGetTracks = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: mocApiData });
        }, 2000);
    };
};