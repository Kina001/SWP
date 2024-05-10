import React, { useState } from 'react';
import Login from './Login';
import './App.css';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !email || !password) {
      setErrorMessage('User needs to enter Username, Email, and Password to sign up for a new Account');
    } else {
      setErrorMessage('');
      setIsLogin(true);
    }
  };

  const handleInputChange = () => {
    setErrorMessage('');
  };
  
  const handleLoginClick = () => {
    setIsLogin(true);
  };

  if (isLogin) {
    return <Login />;
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={username} onChange={(e) => { setUsername(e.target.value); handleInputChange(); }} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value); handleInputChange(); }} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value); handleInputChange(); }} />
        </label>
        <br />
        <input type="submit" value="Sign Up" />
        <button onClick={handleLoginClick}>Return to Log in</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
}

export default SignUp;
