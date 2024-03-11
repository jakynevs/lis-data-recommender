import React, { useState, useEffect }from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';
import theme from '../../styles/theme';
import NavigationButton from '../../styles/NavigationButton';
import Dropdown from '../Dropdown/Dropdown';
import { useAppContext } from '../../Context/StateContext';
import { fetchSubCategories } from '../../services/api';


function SubCategorySelection() {
  const [subCategories, setSubCategories] = useState([])
  const { setSelectedSubCategory } = useAppContext();
  const { selectedCategory } = useAppContext();

  useEffect(() => {
    if (selectedCategory) {
    const getSubCategories = async () => {
      try {
        const data = await fetchSubCategories(selectedCategory);
        setSubCategories(data);
      } catch (error) {
        console.error(error);
      }
    };
    getSubCategories(); 
  }
  }, [])

  const handleDropdownChange = (event) => {
    const subCategoryId = event.target.value;
    setSelectedSubCategory(subCategoryId)
    }

  let navigate = useNavigate();

  const goToPreviousStep = () => {
    navigate('/');
  };

  const goToNextStep = () => {
    navigate('/colour');
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <div>
          <h1>Select a Subcategory</h1>
            <Dropdown 
            options={subCategories.map(subCat => ({ value: subCat.id, label: subCat.name }))} 
            defaultValue={""} 
            onChange={handleDropdownChange} />
            <NavigationButton onClick={goToPreviousStep}>Back</NavigationButton>
            <NavigationButton onClick={goToNextStep}>Next</NavigationButton>
      </div>
      </ThemeProvider>
  );
}

export default SubCategorySelection;
