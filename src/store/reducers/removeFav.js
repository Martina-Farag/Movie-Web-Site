const Initial_state = {

    removeFav: false
}

export default function RemoveFav(state = Initial_state, action) {

    switch (action.type) {
        case "SET_REMOVE":
            return { ...state, removeFav: action.payload }
        default:
            return state
    }


}