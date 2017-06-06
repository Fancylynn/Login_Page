import axios from "axios";
import {getToken} from "./helpers/storage";

const API_URL = "https://api.edu.chat";

export const login = (username, password) => {
    const loginUrl = "/v1/api/login/";
    const user = axios.post(API_URL + loginUrl, {
                username,
                password,
                platform: "web"
            }).then((response) => {
                        return response.data.results;
            }).catch(error => {
                console.error("Authentication didn't work out" + error);
            });
    return user;
}

export const getChat = () => {
    const token = getToken();
    console.log("token" + token);
    const chatUrl = "/v1/chat/";
    const config = {headers: {Authorization: "Token " + token }};
    const chats = axios.get(API_URL + chatUrl, config)
                        .then((response) => {
                            console.log(response.data.results.chats);
                            return response.data.results.chats;
                        }).catch ( error => {
                            console.error("Authenication didn't work out" + error); 
                        });
    console.log(chats);
    return chats;
}