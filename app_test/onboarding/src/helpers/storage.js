export function saveToken(value) {
    localStorage.setItem("token", value);
    console.log(localStorage.getItem("token"));
} 

export function getToken() {
    return localStorage.getItem("token");
}