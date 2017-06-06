import React, {Component} from "react";
import {login, getChat} from "../ecapi";
import Greeting from "../components/Greeting";
import LoginFormMarkup from '../components/LoginFormMarkup';
import {saveToken} from "../helpers/storage";

export default class LoginForm extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            user: {},
            isLoggedIn: false,
            chats: [],
        }
    }

    updateEmail = (e) => this.setState({email: e.target.value});
    
    updatePassword = (e) => this.setState({password: e.target.value});

    async login() {
        const {email, password} = this.state;
        try {
            const results = await login(email,password);
            // console.log(results);
            const {user, token} = results;
            this.setState ({ user, isLoggedIn: true});
            // console.log(user);
            // console.log(token);
            saveToken(token);
            // localStorage.setItem("token", JSON.stringify(token));
            this.getChats();
        }
        catch (error) {
            console.error("Authentication didn't work out" + error);
        }
    }

    async getChats() {
        try {
            const results = await getChat();
            const {chats} = results;
            this.setState({chats});
            console.log(chats);
        }
        catch (error) {
            console.error("Authentication didn't work out" + error);
        }
    }

    // <Greeting name={this.state.user.first_name} />
    render() {

        const returnResult = this.state.isLoggedIn
                                ?
                            <div>
                                <Greeting name={this.state.user.first_name} />
                            </div>
                                :
                            <LoginFormMarkup updateEmail={this.updateEmail} updatePassword={this.updatePassword} login={this.login.bind(this)} />;
        return returnResult;
    }
}