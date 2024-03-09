// CategorySelection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function CategorySelection() {
  let navigate = useNavigate();

  // This function will be triggered when the Next button is clicked
  const goToNextStep = () => {
    // Navigate to the SubcategorySelection step
    navigate('/subcategory');
  };

  return (
    <div>
      <h1>Select a Category</h1>
      {/* Category selection logic */}
      <button onClick={goToNextStep}>Next</button>
    </div>
  );
}

export default CategorySelection;
