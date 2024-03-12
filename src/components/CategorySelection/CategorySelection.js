import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import theme from "../../styles/theme";
import NavigationButton from "../../styles/NavigationButton";
import Dropdown from "../Dropdown/Dropdown";
import { fetchCategories } from "../../services/api";
import { useAppContext } from "../../Context/StateContext";
import PageContainer from "../../styles/PageContainer";
import ContentWrapper from "../../styles/ContentWrapper";
import TitleContainer from "../../styles/TitleContainer";

function CategorySelection() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [itemSelected, setItemSelected] = useState(false);
  const { setSelectedCategory } = useAppContext();

  useEffect(() => {
    const getCategories = async () => {
      const result = await fetchCategories();
      if (result.success) {
        setCategories(result.data);
      } else {
        setError(result.error);
      }
    };

    getCategories();
  }, []);

  const handleDropdownChange = (event) => {
    const categoryId = event.target.value;
    setSelectedCategory(categoryId);
    setItemSelected(true);
  };

  let navigate = useNavigate();

  const goToNextStep = () => {
    navigate("/subcategory");
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageContainer>
        <ContentWrapper>
          <TitleContainer>
            <h1>Select a Category</h1>
          </TitleContainer>
          {error && (
            <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
          )}
          <Dropdown
            options={categories.map((cat) => ({
              value: cat.id,
              label: cat.name,
            }))}
            onChange={handleDropdownChange}
            disabled={!categories.length || error} // Disable dropdown if there's an error or no categories
          />
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

export default CategorySelection;
