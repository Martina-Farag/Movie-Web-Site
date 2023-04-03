const Initial_state = {
    Movies: []
}

export default function changeMovies(state = Initial_state, action) {

    switch (action.type) {
        case 'SET_MOVIE':
            return { ...state, Movies: action.payload }
        default:
            return state
    }

}
