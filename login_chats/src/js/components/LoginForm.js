import React from "react";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.login}>
            <p>
                Email:
                <input type="text" onChange={props.updateEmail}  />
            </p>
            <p>
                Password:
                <input type="password" onChange={props.updatePassword}  />
            </p>
            <input type="submit" />
        </form>
    );
};

export default LoginForm;