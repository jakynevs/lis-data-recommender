import styled from 'styled-components';

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // Creates 4 columns of equal width
  gap: 20px; // Adjusts the space between grid items
  padding: 20px; // Adds some padding around the grid
`;

export const ProductTile = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border-style: solid;
  border-color: ${({ theme }) => theme.primaryHover};
  padding: 15px;
  border-radius: 10px; 

  h2 {
    font-size: 26px;
    margin: 10px 0px; 
    text-align: center;
  }
  p {
    padding: 0 30px; 
    text-align: left;
  }
`;
