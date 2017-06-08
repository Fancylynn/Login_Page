export default function reducer(state={
    chats: [],
}, action) {
    switch(action.type) {
        case "GET_CHATS_SUCCESSFUL":
            // var newState = Object.assign({}, state);
            // newState.chats = action.chats;
            return {...state, chats: action.chats };
            // return newState;
        
        case "GET_CHATS_FAILED":
            return state;
    }
    return state;
}