// SubcategorySelection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function SubcategorySelection() {
  let navigate = useNavigate();

  // Navigate to the previous step
  const goToPreviousStep = () => {
    navigate('/');
  };

  // Placeholder for the logic to proceed to the next step
  const goToNextStep = () => {
    navigate('/colour');
  };

  return (
    <div>
      <h1>Select a Subcategory</h1>
      {/* Your subcategory selection logic here */}
      <button onClick={goToPreviousStep}>Back</button>
      <button onClick={goToNextStep}>Next</button>
    </div>
  );
}

export default SubcategorySelection;
