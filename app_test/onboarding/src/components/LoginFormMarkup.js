import React from 'react';

const LoginFormMarkup = ({updateEmail, updatePassword, login}) => {
    return <div>
                <div>
                    <p>
                        <p>Email:</p>
                        <input type="text" onChange={updateEmail} />
                    </p>
                    <p>
                        <p>Password:</p>
                        <input type="text" onChange={updatePassword} />
                    </p>
                    <button onClick={login}>Login</button>
                </div>
            </div>;
}

export default LoginFormMarkup;
