import React from 'react';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {
  return (
    <div className='App'>
      <main>
        <SignUp />
        <hr />
        <SignIn />
      </main>
    </div>
  );
}

export default App;
