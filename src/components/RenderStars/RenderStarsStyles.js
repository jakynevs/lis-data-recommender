import styled from "styled-components";

export const StarsDisplay = styled.div`
  font-size: 24px; // Adjust the size of the stars as needed
`;

export const Star = styled.span`
  color: ${({ active, theme }) => active ? theme.primaryHover : theme.text};
  cursor: ${({ cursorStyle }) => cursorStyle};
  
  &:hover {
    color: ${({ theme, cursorStyle }) => cursorStyle === 'pointer' ? theme.primaryHover : theme.text};
  }
`;

