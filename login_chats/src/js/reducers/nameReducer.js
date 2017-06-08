export default function reducer(state={
    name: ""
}, action) {
    switch(action.type) {
        case "UPDATE_NAME":
            return {...state, name: action.name};
    }
    return state;
}