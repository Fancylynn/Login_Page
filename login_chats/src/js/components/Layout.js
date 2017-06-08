import React from "react"
import { connect } from "react-redux"

import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"

import WhatsYourName from "./Name";
import { updateName} from "../actions/nameActions";
import LoginForm from "./LoginForm";
import DisplayChats from "./DisplayChats";

import {updateEmail, updatePassword, login} from "../actions/loginAction";
import Greeting from "./Greeting";
import _ from "lodash";

import {getChats} from "../actions/chatsAction";
import {doLogin} from "../actions/loginAction";

@connect((store) => {
  return {
    name: store.nameReducer.name,
    email: store.loginReducer.email,
    password: store.loginReducer.password,
    user: store.loginReducer.user,
    token: store.loginReducer.token,
    chats: store.chatsReducer.chats,
  };
})
export default class Layout extends React.Component {
  updateName = (e) => {
    const name = e.target.value;
    this.props.dispatch(updateName(name));  
  }

  login = (e) => {
    e.preventDefault();
    const {email, password} = this.props;
    this.props.dispatch(doLogin(email, password));
  }

  updateEmail = (e) => {
    this.props.dispatch(updateEmail(e.target.value));
  }

  updatePassword = (e) => {
    this.props.dispatch(updatePassword(e.target.value));
  }

  render() {
    /*return <div>
              <p>Hello, {this.props.name}</p>
              <WhatsYourName updateName={this.updateName}/>
          </div>*/
    return (
      <div>
        <LoginForm login={this.login} updateEmail={this.updateEmail} updatePassword={this.updatePassword} />
        {!_.isEmpty(this.props.user) && <Greeting name={this.props.user.first_name}/>}
        <DisplayChats chats={this.props.chats} />
      </div>)

  }
}
