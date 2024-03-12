import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';
import theme from '../../styles/theme';
import NavigationButton from '../../styles/NavigationButton';
import { useAppContext } from '../../Context/StateContext';
import { fetchProducts } from '../../services/api';
import { ProductsGrid, ProductTile } from '../../styles/ProductGrid';


function ProductListing() {
  const [products, setProducts] = useState([])
  const {selectedCategory, selectedSubCategory, selectedColour} = useAppContext()

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [freeShipping, setFreeShipping] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [stockFilter, setStockFilter] = useState(false); 
  const [sortOption, setSortOption] = useState('rating_desc'); 
  const [mostExpensiveProduct, setMostExpensiveProduct] = useState(0)

  useEffect(() => {
    if (selectedCategory && selectedSubCategory && selectedColour) {
      const getProducts = async () => {
        try {
          const data = await fetchProducts(selectedCategory, selectedSubCategory, selectedColour);
          setProducts(data);
          setMostExpensiveProduct(Math.max(...data.map(product => product.price)));
          setMaxPrice(mostExpensiveProduct)
        } catch (error) {
          console.log(error)
        }
      }
      getProducts()
    }
  }, [selectedCategory, selectedSubCategory, selectedColour, mostExpensiveProduct])
  
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
    setMinPrice(newValue > maxPrice ? maxPrice : newValue);
  };

  // Handle changes in maxPrice
  const handleMaxPriceChange = (e) => {
    const newValue = Number(e.target.value);
    // Ensure maxPrice is not less than current minPrice
    setMaxPrice(newValue < minPrice ? minPrice : newValue);
  };

  let navigate = useNavigate();
  
  const goToPreviousStep = () => {
    navigate('/colour');
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <div>
          <h1>Recommended Products</h1>
          <div>
            Minimum Price: <input type="range" min="0" max={maxPrice} value={minPrice} onChange={handleMinPriceChange} />
            {minPrice}
          </div>
          <div>
            Maximum Price: <input type="range" min={minPrice} max={mostExpensiveProduct} value={maxPrice} onChange={handleMaxPriceChange} />
            {maxPrice}
          </div>
          <div>
            Minimum Rating
              <input type="range" min="1" max="5" value={minRating} onChange={e => setMinRating(Number(e.target.value))} /> 
          </div>
          Free Shipping
          <input type="checkbox" checked={freeShipping} onChange={e => setFreeShipping(e.target.checked)} /> 
          In Stock Only
          <input type="checkbox" checked={stockFilter} onChange={e => setStockFilter(e.target.checked)} /> 
    <      select value={sortOption} onChange={e => setSortOption(e.target.value)}>
            <option value="rating_asc">Rating Ascending</option>
            <option value="rating_desc">Rating Descending</option>
            <option value="price_asc">Price Ascending</option>
            <option value="price_desc">Price Descending</option>
          </select>
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
        </div>
    </ThemeProvider>
  );
}

export default ProductListing;
