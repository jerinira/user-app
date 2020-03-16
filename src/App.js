import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserReq from './Components/UserReq/UserReq';
import User from './Components/User/User';
import Header from './Components/Header/Header'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header></Header>
        <UserReq></UserReq>
    
      </header>
    </div>
  );
}

export default App;
