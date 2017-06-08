export default function reducer(state={
    email: "lucas@edu.chat",
    password: "test#123",
    user: {},
    token: "",
    // isloginIn: false,
}, action) {
    switch(action.type) {
        case "UPDATE_EMAIL":
            return {...state, email: action.email };

        case "UPDATE_PASSWORD":
            return {...state, password: action.password };
        
        case "LOGIN_SUCCESSFUL":
            return {...state, user: action.user, token: action.token};

        // case "LOGIN_FAILED":
        //     return state;
    }
    return state;
}