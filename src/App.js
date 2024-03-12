import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategorySelection from "./components/CategorySelection/CategorySelection";
import SubCategorySelection from "./components/SubCategorySelection/SubCategorySelection";
import ColourSelection from "./components/ColourSelection/ColourSelection";
import ProductListing from "./components/ProductListing/ProductListing";
import { AppProvider } from "./Context/StateContext";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CategorySelection />} />
          <Route path="/subcategory" element={<SubCategorySelection />} />
          <Route path="/colour" element={<ColourSelection />} />
          <Route path="/products" element={<ProductListing />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
