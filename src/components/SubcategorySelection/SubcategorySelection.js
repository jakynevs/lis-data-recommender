import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import theme from "../../styles/theme";
import NavigationButton from "../../styles/NavigationButton";
import Dropdown from "../Dropdown/Dropdown";
import { useAppContext } from "../../Context/StateContext";
import { fetchSubCategories } from "../../services/api";
import PageContainer from "../../styles/PageContainer";
import ContentWrapper from "../../styles/ContentWrapper";
import TitleContainer from "../../styles/TitleContainer";

function SubCategorySelection() {
  const { setSelectedSubCategory } = useAppContext();
  const { selectedCategory } = useAppContext();
  const [subCategories, setSubCategories] = useState([]);
  const [error, setError] = useState("");
  const [itemSelected, setItemSelected] = useState(false);

  // Request categories from backend
  useEffect(() => {
    const getSubCategories = async () => {
      const result = await fetchSubCategories(selectedCategory);
      if (result.success) {
        setSubCategories(result.data);
      } else {
        setError(result.error);
      }
    };

    getSubCategories();
  }, [selectedCategory]);

  const handleDropdownChange = (event) => {
    const subCategoryId = event.target.value;
    setSelectedSubCategory(subCategoryId);
    setItemSelected(true);
  };

  let navigate = useNavigate();

  const goToPreviousStep = () => {
    navigate("/");
  };

  const goToNextStep = () => {
    navigate("/colour");
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageContainer>
        <ContentWrapper>
          <TitleContainer>
            <h1>Select a Subcategory</h1>
          </TitleContainer>
          {error && (
            <div style={{ color: "red", marginBottom: "10px" }}>{error}</div> // Clear error messaging to user
          )}
          <Dropdown // Map through subcategory options
            options={subCategories.map((subCat) => ({
              value: subCat.id,
              label: subCat.name,
            }))}
            defaultValue={""}
            onChange={handleDropdownChange}
            disabled={!subCategories.length || error} // Disable dropdown if there's an error or no colours
          />
          <NavigationButton onClick={goToPreviousStep}>Back</NavigationButton>
          <NavigationButton
            onClick={goToNextStep}
            disabled={!itemSelected || error} // Only enabled next button if an item has been selected
          >
            Next
          </NavigationButton>
        </ContentWrapper>
      </PageContainer>
    </ThemeProvider>
  );
}

export default SubCategorySelection;
