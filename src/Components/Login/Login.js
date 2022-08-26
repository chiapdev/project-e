import React from 'react';

export default function Login() {
    return(
        <div className="login-wrapper">
            <h1>Loggati decerebrato</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Prova, ma tanto è sbagliata la password</button>
                </div>
            </form>
        </div>
    )
}