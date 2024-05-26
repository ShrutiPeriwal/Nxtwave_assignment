import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/home_page';
import AddResourceItemPage from './components/add_resource';
import LoginPage from './components/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/resources" element={<HomePage />} />
          <Route path="/add" element={<AddResourceItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;