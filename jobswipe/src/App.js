import React from 'react';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import StickyFooter from './components/StickyFooter';

function App() {
  return (
    <div className='App'>
      <main>
        <SignUp />
        <SignIn />
        <StickyFooter />
      </main>
    </div>
  );
}

export default App;
