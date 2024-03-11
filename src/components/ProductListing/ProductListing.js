import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';
import theme from '../../styles/theme';
import NavigationButton from '../../styles/NavigationButton';
import { useAppContext } from '../../Context/StateContext';
import { fetchProducts } from '../../services/api';

function ProductListing() {
  const [products, setProducts] = useState([])
  const {selectedCategory, selectedSubCategory, selectedColour} = useAppContext()

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
  }, [])

  let navigate = useNavigate();
  
  const goToPreviousStep = () => {
    navigate('/colour');
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <div>
          <h1>Recommended Products</h1>
            <ul>
              {products.map(product => (
              <li key={product.id}>
                <h2>{product.name}</h2>
                  <p>Price: ${product.price}</p>
                  <p>Free Shipping: {product.is_free_shipping ? 'Yes' : 'No'}</p>
                  <p>Average Rating: {product.average_rating}</p>
                  <p>Stock: {product.stock_quantity}</p>
              </li>
          ))}
            </ul>
          <NavigationButton onClick={goToPreviousStep}>Back</NavigationButton>
        </div>
    </ThemeProvider>
  );
}

export default ProductListing;
