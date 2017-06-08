import { call,put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from "axios";

import {getChatsSuccessful} from "../actions/chatsAction";

const API_URL = "https://api.edu.chat";

function getRequest(token) {
    const chatUrl = "/v1/chat/";
    const config = {headers: {Authorization: "Token " + token }};
    return axios.get(API_URL + chatUrl, config);
}

function* checkGetChats(action) {
    if (action != undefined) {
        try {
            const {data:{results}} = yield call(getRequest, action.token);
            console.log(results.chats);
            alert("saving chats");
            yield put.resolve(getChatsSuccessful(results.chats));
            alert("saved");
        } catch(e) {
            yield put({type: "GET_CHATS_FAILED"});
        }
    }
}
function* getChats() {
    yield takeLatest("GET_CHATS", checkGetChats)
}

export default getChats;