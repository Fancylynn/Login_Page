import axios from "axios";

export function updateEmail(email) {
    return {type: "UPDATE_EMAIL", email};

}

export function updatePassword(password) {
    return {type: "UPDATE_PASSWORD", password};
    
}

export function doLogin(email,password){
    return function (dispatch) {
        dispatch({type: "LOGIN_SUBMITTED", email, password })
    }
}

export function loginSuccessful(user, token) {
    return function (dispatch) {
        dispatch ({type: "LOGIN_SUCCESSFUL", user, token})
    }
}

export function loginFailed() {
    return function (dispatch) {
        dispatch ({type: "LOGIN_FAILED"})
    }
}

// export function getChats(token) {
//     return function (dispatch) {
//         dispatch({type: "GET_CHATS", token})
//     }
    
// }

// export function login(email, password) {
//     return function(dispatch) {
//         dispatch({type: "LOGIN_STARTED"});
//         axios.post("http://api.edu.chat/v1/api/login/", {
//             username: email,
//             password, 
//             platform: "web"})
//             .then((response) => {
//                 const {user, token} = response.data.results;
//                 dispatch({type: "LOGIN_DONE", user, token});
//             });
//     }
// }