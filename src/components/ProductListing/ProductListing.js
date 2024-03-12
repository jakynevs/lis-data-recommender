import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';
import theme from '../../styles/theme';
import NavigationButton from '../../styles/NavigationButton';
import { useAppContext } from '../../Context/StateContext';
import { fetchProducts } from '../../services/api';
import { ProductsGrid, ProductTile } from '../../styles/ProductGrid';
import TitleContainer from '../../styles/TitleContainer';
import { Filter, FilterLabel, FiltersContainer, FilterGroup, Column } from '../../styles/FilterStyles';

function ProductListing() {
  const [products, setProducts] = useState([])
  const {selectedCategory, selectedSubCategory, selectedColour} = useAppContext()
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [freeShipping, setFreeShipping] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [stockFilter, setStockFilter] = useState(false); 
  const [sortOption, setSortOption] = useState('rating_desc'); 

  useEffect(() => {
    if (selectedCategory && selectedSubCategory && selectedColour) {
      const getProducts = async () => {
        try {
          const data = await fetchProducts(selectedCategory, selectedSubCategory, selectedColour);
          setProducts(data);
        } catch (error) {
          console.log(error)
        }
      }
      getProducts()
    }
  }, [selectedCategory, selectedSubCategory, selectedColour])
  
  useEffect(() => {
    let result = products; 
  
    if (freeShipping) {
      result = result.filter(product => product.is_free_shipping);
    }
  
    if (minRating > 0) {
      result = result.filter(product => product.average_rating >= minRating);
    }
    
    if (minPrice > 0) {
      result = result.filter(product => product.price >= minPrice);
    }

    if (maxPrice) {
      result = result.filter(product => product.price <= maxPrice)
    }

    switch (sortOption) {
      case 'rating_asc':
        result.sort((a, b) => a.average_rating - b.average_rating);
        break;
      case 'rating_desc':
        result.sort((a, b) => b.average_rating - a.average_rating);
        break;
      case 'price_asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
  
    setFilteredProducts(result);
  }, [products, freeShipping, minRating, sortOption, minPrice, maxPrice, stockFilter]);
  
  // Handle changes in minPrice
  const handleMinPriceChange = (e) => {
    const newValue = Number(e.target.value);
    // Ensure minPrice does not exceed current maxPrice
    setMinPrice(newValue);
    if (newValue >= maxPrice) {
      setMaxPrice(newValue)
    }
  };

  // Handle changes in maxPrice
  const handleMaxPriceChange = (e) => {
    const newValue = Number(e.target.value);
    // Ensure maxPrice is not less than current minPrice
    setMaxPrice(newValue);
    if (newValue <= minPrice) {
      setMinPrice(newValue)
    }
  };

  let navigate = useNavigate();
  
  const goToPreviousStep = () => {
    navigate('/colour');
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <TitleContainer>
          <h1>Recommended Products</h1>
        </TitleContainer>
        <FiltersContainer>
          <Column>
              <FilterGroup>
                <FilterLabel>Minimum Price:</FilterLabel>
                <Filter>
                  <input type="range" min="0" max="2000" value={minPrice} onChange={handleMinPriceChange} />  ${Math.round(maxPrice)}
                </Filter>
              </FilterGroup>
                <FilterGroup>
                  <FilterLabel>Maximum Price:</FilterLabel>
                  <Filter>
                  <input type="range" min="0" max="2000" value={maxPrice} onChange={handleMaxPriceChange} />  ${Math.round(minPrice)}
                  </Filter>
                </FilterGroup>
          </Column>
          <Column>
            <FilterGroup>
              <FilterLabel>Rating:</FilterLabel>
              <Filter>
                <input type="range" min="1" max="5" value={minRating} onChange={e => setMinRating(Number(e.target.value))} /> 
              </Filter>
            </FilterGroup>
            <FilterGroup>
              <FilterLabel>Sort:</FilterLabel>
              <Filter>
                <select value={sortOption} onChange={e => setSortOption(e.target.value)}>
                  <option value="rating_asc">Rating Ascending</option>
                  <option value="rating_desc">Rating Descending</option>
                  <option value="price_asc">Price Ascending</option>
                  <option value="price_desc">Price Descending</option>
                </select>
              </Filter>
            </FilterGroup>
          </Column>
          <Column>
            <FilterGroup>
              <FilterLabel>Free Shipping</FilterLabel>
              <Filter>
                <input type="checkbox" checked={freeShipping} onChange={e => setFreeShipping(e.target.checked)} />
              </Filter>
            </FilterGroup>
            <FilterGroup>
              <FilterLabel>In Stock Only</FilterLabel>
              <Filter>
                <input type="checkbox" checked={stockFilter} onChange={e => setStockFilter(e.target.checked)} />
              </Filter>
            </FilterGroup>
          </Column>
        </FiltersContainer>

          <ProductsGrid>
              {filteredProducts.map(product => (
                <ProductTile key={product.id}>
                <h2>{product.name}</h2>
                  <p>Price: ${product.price}</p>
                  <p>Free Shipping: {product.is_free_shipping ? 'Yes' : 'No'}</p>
                  <p>Average Rating: {product.average_rating}</p>
                  <p>Stock: {product.stock_quantity}</p>
              </ProductTile>
          ))}
            </ProductsGrid>
          <NavigationButton onClick={goToPreviousStep}>Back</NavigationButton>
    </ThemeProvider>
  );
}

export default ProductListing;
