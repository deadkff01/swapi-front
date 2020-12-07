import styled from 'styled-components';
import { navigate } from '@reach/router';

const goBack = () => {
  navigate(-1);
};

export const BackButtonStyle = styled.button`
  position: absolute;
  top: -55px;
  left: 0px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  background-color: transparent;
  width: 166px;
  height: 28px;
  padding-left: 33px;
  text-align: left;
  cursor: pointer;
  outline: none !important;
  border: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function BackButton() {
  return (
    <BackButtonStyle onClick={goBack} className="mt-5" data-testid="movie-card">
      {'< '} Back
    </BackButtonStyle>
  );
}
