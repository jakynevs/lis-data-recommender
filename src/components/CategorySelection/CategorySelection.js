import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';
import theme from '../../styles/theme';
import NavigationButton from '../../styles/NavigationButton';
import Dropdown from '../Dropdown/Dropdown'


function CategorySelection() {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];
  const handleDropdownChange = (event) => {
    console.log("Changed dropdown")
  }
  
  let navigate = useNavigate();

  const goToNextStep = () => {
    navigate('/subcategory');
  
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <div>
          <h1>Select a Category</h1>
          <Dropdown options={options} defaultValue="" onChange={handleDropdownChange} />
          <NavigationButton onClick={goToNextStep}>Next</NavigationButton>
        </div>
    </ThemeProvider>

  );
}

export default CategorySelection;
