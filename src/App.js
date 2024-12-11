import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/PaginaBusca';
import ProductPage from './components/PaginaProdutos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Página inicial */}
        <Route path="/product/:id" element={<ProductPage />} /> {/* Página do produto com id */}
      </Routes>
    </Router>
  );
}

export default App;
