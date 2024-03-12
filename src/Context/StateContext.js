import React, { createContext, useContext, useState, useMemo } from 'react';

const AppContext = createContext({
  selectedCategory: null,
  setSelectedCategory: () => {},
  selectedSubCategory: null,
  setSelectedSubCategory: () => {},
  selectedColour: null,
  setSelectedColour: () => {}
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedColour, setSelectedColour] = useState(null);

  const value = useMemo(() => ({
    selectedCategory,
    setSelectedCategory,
    selectedSubCategory,
    setSelectedSubCategory,
    selectedColour,
    setSelectedColour
  }), [selectedCategory, selectedSubCategory, selectedColour]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
