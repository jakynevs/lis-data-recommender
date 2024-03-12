import styled from "styled-components";

const NavigationButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  height: 40px;
  width: 100px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 10px;
  border-radius: 12px;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }
`;

export default NavigationButton;
