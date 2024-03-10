import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';
import theme from '../../styles/theme';
import NavigationButton from '../../styles/NavigationButton';
// Import components for filters and product items

function ProductListing() {
  let navigate = useNavigate();
  
  const goToPreviousStep = () => {
    navigate('/colour');
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <div>
          <h1>Recommended Products</h1>
          {/* Implement filter components */}
          {/* Map through products to display them */}
          <NavigationButton onClick={goToPreviousStep}>Back</NavigationButton>
        </div>
    </ThemeProvider>
  );
}

export default ProductListing;
