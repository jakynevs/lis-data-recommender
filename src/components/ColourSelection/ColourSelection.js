import React from 'react';
import { useNavigate } from 'react-router-dom';

function ColourSelection() {
  let navigate = useNavigate();

    // Navigate to the previous step
    const goToPreviousStep = () => {
      navigate('/subcategory');
    };
  
    // Placeholder for the logic to proceed to the next step
    const goToNextStep = () => {
      navigate('/products');
    };

  return (
    <div>
      <h1>Select a Colour</h1>
      {/* Need to render categories here */}
      <button onClick={goToPreviousStep}>Back</button>
      <button onClick={goToNextStep}>Next</button>    
      </div>
  );
}

export default ColourSelection;
