import React from 'react';
import Select from 'react-select';

const Institution = [
    { label: "Apple", value: 1 }
];

const [PasswordName, setPasswordName] = useState("");

function handlePasswordChange(PasswordName) {
    console.log ("passwordChanged", PasswordName)
    setPasswordName(PasswordChange);
  }

const Password = [
    password = ""
]

const Login = () => (
    <div className="container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <Select options={ Institution } />
          <Password 
          type = "password"
          onChange={handlePasswordChange(PasswordName)}
          />
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
  
  export default Login