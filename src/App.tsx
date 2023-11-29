import React from 'react';
import { RecoilRoot } from 'recoil';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </RecoilRoot>
);
}

export default App;
