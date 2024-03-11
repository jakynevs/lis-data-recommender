import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';
import theme from '../../styles/theme';
import NavigationButton from '../../styles/NavigationButton';
import Dropdown from '../Dropdown/Dropdown'
import { useAppContext } from '../../Context/StateContext';
import { fetchColours } from '../../services/api';

function ColourSelection() {
  const [colours, setColours] = useState([])
  const { setSelectedColour } = useAppContext()
  const { selectedSubCategory } = useAppContext()

  useEffect(() => {
    if(selectedSubCategory) {
      const getColours = async () => {
        try {
          const data = await fetchColours(selectedSubCategory)
          setColours(data);
        } catch (error) {
          console.log(error)
        }
      };
      getColours();
    }
  }, [])

  const handleDropdownChange = (event) => {
    const colourId = event.target.value;
    setSelectedColour(colourId)
    }

  let navigate = useNavigate();

    const goToPreviousStep = () => {
      navigate('/subcategory');
    };
  
    const goToNextStep = () => {
      navigate('/products');
    };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <div>
          <h1>Select a Colour</h1>
            <Dropdown 
              options={colours.map(col => ({ value: col.id, label: col.name }))} 
              defaultValue={""} 
              onChange={handleDropdownChange} />          
              <NavigationButton onClick={goToPreviousStep}>Back</NavigationButton>
              <NavigationButton onClick={goToNextStep}>Next</NavigationButton>    
          </div>
      </ThemeProvider>
  );
}

export default ColourSelection;
