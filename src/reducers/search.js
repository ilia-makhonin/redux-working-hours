export default function musicSearch(state = [], action) {
    switch (action.type) {
        case 'SEARCH_SOUND': {
            console.log(state);
            return state.filter((item) => { return item === action.search});
        }
        default: return state;
    }
}