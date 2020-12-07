import styled from 'styled-components';

const Title = styled.h1`
  color: #ddd;
  transition: all 0.5s ease;
  font-weight: 800;
  margin: 18px 0;
  text-align: ${({ align }) => align || 'center'};
`;

export default Title;
