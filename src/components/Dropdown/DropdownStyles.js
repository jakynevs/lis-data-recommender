import styled from 'styled-components';

export const DropdownContainer = styled.div`
  padding: 10px;
  margin: 40px auto;
  width: fit-content;
`;

export const Select = styled.select`
  height: 50px;
  width: 500px;  
  border-radius: 5px;
  border: 3px solid #ccc;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  text-align: center;
  cursor: pointer;
  border-radius: 12px;
  font-size: 20px;
  &:hover {
    border-color: ${({ theme }) => theme.primaryHover};;
  }
  &:focus {
    outline: none;
    border-color: #007bff; 
  }
`;
