import styled from 'styled-components';

const ErrorWarningStyle = styled.div`
  background-color: transparent;
  color: red;
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  max-width: 500px;
  margin-bottom: 20px;
  font-family: 'STARWARS';
  text-transform: uppercase;
  margin: 10px auto;
`;
export default function ErrorWarning({ message }) {
  return (
    <ErrorWarningStyle data-testid="error-message">{message}</ErrorWarningStyle>
  );
}
