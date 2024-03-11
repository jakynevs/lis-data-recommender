import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';
import theme from '../../styles/theme';
import NavigationButton from '../../styles/NavigationButton';
import Dropdown from '../Dropdown/Dropdown'
import { fetchCategories } from '../../services/api'; 


function CategorySelection() {
  const [ categories, setCategories ] = useState([])

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

    getCategories();
  }, []);

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
          <Dropdown 
          options={categories.map(cat => ({ value: cat.id, label: cat.name }))}
          defaultValue="" 
          onChange={handleDropdownChange} />
          <NavigationButton onClick={goToNextStep}>Next</NavigationButton>
        </div>
    </ThemeProvider>

  );
}

export default CategorySelection;
