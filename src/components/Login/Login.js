import React, { useState } from 'react';
import SignUp from './Signup';
import './App.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username && !password) {
      setErrorMessage('User needs to enter Username and Password or sign up for a new Account');
    } else if (!username) {
      setErrorMessage('User needs to enter Username');
    } else if (!password) {
      setErrorMessage('User needs to enter Password');
    } else {
      setErrorMessage('');
      
    }
  };

  const handleInputChange = () => {
    setErrorMessage('');
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  if (isSignUp) {
    return <SignUp />;
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
          Password:
          <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value); handleInputChange(); }} />
        </label>
        <br />
        <input type="submit" value="Login" />
        <button onClick={handleSignUpClick}>Sign Up</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
}

export default Login;