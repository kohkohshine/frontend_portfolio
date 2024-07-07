import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Error from './pages/Error';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='*' element={<Error/>} />
      <Route index element={<Home/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App