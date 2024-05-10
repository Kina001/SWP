import React, { useState } from 'react';
import Login from './Login';
import SignUp from './Signup';
import './App.css';

function App() {
  const [page, setPage] = useState('');

  if (page === 'Login') {
    return <Login />;
  }

  if (page === 'SignUp') {
    return <SignUp />;
  }

  return (
    <div className="App">
      <button onClick={() => setPage('Login')}>Log in</button>
      <button onClick={() => setPage('SignUp')}>Sign Up</button>     
    </div>
  );
}

export default App;

