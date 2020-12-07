import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  transition: opacity 0.3s;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
    padding: 0 15px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  // enter from
  &.fade-enter {
    opacity: 0;
  }

  // enter to
  &.fade-enter-active {
    opacity: 1;
  }

  // exit from
  &.fade-exit {
    opacity: 1;
  }

  // exit to
  &.fade-exit-active {
    opacity: 0;
  }

  &.fade-appear {
    opacity: 0.01;
  }

  &.fade-appear.fade-appear-active {
    opacity: 1;
    transition: opacity 1200ms ease-in;
  }
`

export default Container
