import styled from 'styled-components';

const ContentWrapper = styled.div`
  max-width: 600px; 
  width: 100%;
  margin: auto; 
  text-align: center;
  padding-top: 20px; 
  background: ${({ theme }) => theme.body};
  border-radius: 12px;

  > h1 {
      margin-top: 0px; 
  }
`;

export default ContentWrapper;