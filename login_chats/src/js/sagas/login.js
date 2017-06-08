import { call,put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from "axios";
import {getChats} from "../actions/chatsAction";
import {loginSuccessful} from "../actions/loginAction";

function sendRequest(email, password) {
    return axios.post("http://api.edu.chat/v1/api/login/",
        {username: email, password: password, platform: "web"});
}


function* checkLogin(action) {
    if (action != undefined) {
        try {
            const response = yield call(sendRequest, action.email, action.password);
            const {data} = response;
            yield call(console.log, response);
            yield call(console.log, data);
            yield put.resolve(loginSuccessful(data.results.user, data.results.token));
            alert(1);
            yield put(getChats(data.results.token));
        } catch (e) {
            console.error("Cannot Login");
        }
    }
}


function* loginChats(){
    yield takeEvery("LOGIN_SUBMITTED", checkLogin);
}

export default loginChats;
