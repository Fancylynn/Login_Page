export function getChats(token) {
    return function (dispatch) {
        dispatch({type: "GET_CHATS", token})
    }
    
}

export function getChatsSuccessful(chats) {
    return function (dispatch) {
        dispatch({type: "GET_CHATS_SUCCESSFUL", chats})
    }
    
}