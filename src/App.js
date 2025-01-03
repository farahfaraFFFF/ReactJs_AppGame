import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import GamePage from './components/GamePage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:gameId" element={<GamePage />} />
      </Routes>
  );
}

export default App;