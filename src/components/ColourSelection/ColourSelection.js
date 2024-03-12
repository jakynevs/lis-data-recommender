import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import theme from "../../styles/theme";
import NavigationButton from "../../styles/NavigationButton";
import Dropdown from "../Dropdown/Dropdown";
import { useAppContext } from "../../Context/StateContext";
import { fetchColours } from "../../services/api";
import PageContainer from "../../styles/PageContainer";
import ContentWrapper from "../../styles/ContentWrapper";
import TitleContainer from "../../styles/TitleContainer";

function ColourSelection() {
  const { setSelectedColour } = useAppContext();
  const { selectedSubCategory } = useAppContext();
  const [colours, setColours] = useState([]);
  const [error, setError] = useState(null);
  const [itemSelected, setItemSelected] = useState(false);

  useEffect(() => {
    const getColours = async () => {
      const result = await fetchColours(selectedSubCategory);
      if (result.success) {
        setColours(result.data);
      } else {
        setError(result.error);
      }
    };
    getColours();
  }, [selectedSubCategory]);

  const handleDropdownChange = (event) => {
    const colourId = event.target.value;
    setSelectedColour(colourId);
    setItemSelected(true);
  };

  let navigate = useNavigate();

  const goToPreviousStep = () => {
    navigate("/subcategory");
  };

  const goToNextStep = () => {
    navigate("/products");
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageContainer>
        <ContentWrapper>
          <TitleContainer>
            <h1>Select a Colour</h1>
          </TitleContainer>
          {error && (
            <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
          )}
          <Dropdown
            options={colours.map((col) => ({ value: col.id, label: col.name }))}
            defaultValue={""}
            onChange={handleDropdownChange}
            disabled={!colours.length || error} // Disable dropdown if there's an error or no colours
          />
          <NavigationButton onClick={goToPreviousStep}>Back</NavigationButton>
          <NavigationButton
            onClick={goToNextStep}
            disabled={!itemSelected || error}
          >
            Next
          </NavigationButton>
        </ContentWrapper>
      </PageContainer>
    </ThemeProvider>
  );
}

export default ColourSelection;
