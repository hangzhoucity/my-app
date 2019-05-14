import React from 'react';
import Select from 'react-select';

// login.component.js
import { useState } from 'react'
function handleLogin(login) {
        axios.post('/api/login/', login).then((v) => {
            // ...
        }, (err) => {
            // ...
        })
}
function LoginComponent() {
    const [loginDetails, setLoginDetails] = useState({Institution: ['CISSME Hôpital Pierre-Boucher'], password: '1234'})
    return (
      <div>
                <form>
                    <input id='institution' onInput={()=>setLoginDetails({institution: this.value})} />
                    <input id='password' onInput={()=>setLoginDetails({password: this.value})} />
                    <button onClick={()=>handleLogin(loginDetails)}>Connexion</button>
                </form>
            </div>        
    );
}
export default login;