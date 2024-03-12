import styled from 'styled-components';

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: ${({ theme }) => theme.body};
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
`;

export const FilterLabel = styled.label`
margin-left: 75px;
margin-right: 10px;
font-weight: bold;
flex-shrink: 0; // Prevent the label from shrinking`;

export const Filter = styled.div`
display: flex;
justify-content: flex-end; // Align filter elements to the end (right)
flex-grow: 1; // Allow the filter to grow and take available space
margin-right: 75px;
`;

export const FilterGroup = styled.div`
  display: flex;
  margin: 10px;
  align-items: center; // Vertically align items
  justify-content: space-between; // Space between label and filter elements
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1; // Allows the column to take up equal space
  &:not(:last-child) {
    margin-right: 10px; // Add space between columns, except the last one
  }
`;

export const PriceDisplay = styled.span`
  display: inline-block;
  width: 60px; // Set this to the width that can hold your largest number
  text-align: right;
`;