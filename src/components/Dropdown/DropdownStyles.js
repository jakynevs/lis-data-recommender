import styled from 'styled-components';

export const DropdownContainer = styled.div`
  padding: 10px;
  margin: 0 auto;
  width: fit-content; /* Adjust based on your layout */
`;

export const Select = styled.select`
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: pink;
  cursor: pointer;
  &:hover {
    border-color: #888;
  }
  &:focus {
    outline: none;
    border-color: #007bff; /* Bootstrap primary color for reference */
  }
`;
