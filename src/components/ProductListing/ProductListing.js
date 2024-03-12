import React, { useEffect, useState } from 'react';
import TitleContainer from '../../styles/TitleContainer';
import StarsRating from '../RenderStars/RenderStars';
import GlobalStyle from '../../styles/GlobalStyle';
import theme from '../../styles/theme';
import NavigationButton from '../../styles/NavigationButton';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useAppContext } from '../../Context/StateContext';
import { fetchProducts } from '../../services/api';
import { Filter, FilterLabel, FiltersContainer, FilterGroup, Column, PriceDisplay, ProductsGrid, ProductTile } from './ProductListingStyles';

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
  const [error, setError] = useState(null); // State for managing fetch errors
  const [isLoading, setIsLoading] = useState(false); // State for managing loading state

  useEffect(() => {
    setIsLoading(true); // Start loading
    const getProducts = async () => {
      const result = await fetchProducts(selectedCategory, selectedSubCategory, selectedColour);
      if (result.success) {
        setProducts(result.data);
        } else {
        setError(result.error);
      } 
      setIsLoading(false) // End loading 
      
    }
    getProducts()
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

    // Handler to update the rating
    const handleStarClick = (newRating) => {
      setMinRating(newRating);
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
                  <input type="range" min="0" max="2000" value={minPrice} onChange={handleMinPriceChange} />  
                  <PriceDisplay>${Math.round(maxPrice)}</PriceDisplay>
                </Filter>
              </FilterGroup>
                <FilterGroup>
                  <FilterLabel>Maximum Price:</FilterLabel>
                  <Filter>
                  <input type="range" min="0" max="2000" value={maxPrice} onChange={handleMaxPriceChange} />  
                  <PriceDisplay>${Math.round(minPrice)}</PriceDisplay>
                  </Filter>
                </FilterGroup>
          </Column>
          <Column>
            <FilterGroup>
              <FilterLabel>Rating:</FilterLabel>
              <Filter>
                <StarsRating rating={minRating} onStarClick={handleStarClick}/>
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
        {error && <div style={{ color: 'red' }}>{error}</div>} 
        {isLoading ? (
          <div>Loading products...</div> 
          ) : ( 
            <ProductsGrid>
              {filteredProducts.map(product => (
                <ProductTile key={product.id}>
                <h2>{product.name}</h2>
                  <p><strong>Price: </strong>${product.price}</p>
                  <p><strong>Free Shipping:</strong> {product.is_free_shipping ? 'Yes' : 'No'}</p>
                  <p><strong>Average Rating:</strong> 
                  <StarsRating rating={Math.round(product.average_rating)} />
                  </p>
                  <p><strong>Stock:</strong> {product.stock_quantity}</p>
              </ProductTile>
          ))}
            </ProductsGrid>
        )}
          <NavigationButton onClick={goToPreviousStep}>Back</NavigationButton>
    </ThemeProvider>
  );
}

export default ProductListing;
