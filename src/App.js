import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategorySelection from './components/CategorySelection/CategorySelection';
import SubcategorySelection from './components/SubcategorySelection/SubcategorySelection';
import ColourSelection from './components/ColourSelection/ColourSelection';
import ProductListing from './components/ProductListing/ProductListing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CategorySelection />} />
        <Route path="/subcategory" element={<SubcategorySelection />} />
        <Route path="/colour" element={<ColourSelection />} />
        <Route path="/products" element={<ProductListing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
