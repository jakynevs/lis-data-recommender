import React, { createContext, useContext, useState, useMemo } from "react";

// Create a context with initial default values
const AppContext = createContext({
  selectedCategory: null,
  setSelectedCategory: () => {},
  selectedSubCategory: null,
  setSelectedSubCategory: () => {},
  selectedColour: null,
  setSelectedColour: () => {},
});

// Custom hook to use the AppContext for easier use
export const useAppContext = () => useContext(AppContext);

// Provider component that wraps app where the context is accessible
export const AppProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedColour, setSelectedColour] = useState(null);

  // useMemo hook to memoize the context value
  const value = useMemo(
    () => ({
      selectedCategory,
      setSelectedCategory,
      selectedSubCategory,
      setSelectedSubCategory,
      selectedColour,
      setSelectedColour,
    }),
    // Dependencies array for useMemo, to recalculate the value when any of these states change
    [selectedCategory, selectedSubCategory, selectedColour]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
