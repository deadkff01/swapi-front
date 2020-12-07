import { CSSTransition } from 'react-transition-group';

export function Fade({ children, ...props }) {
  // tests and CSSTransition didn't work well...
  // I try to mock like this tutorial, but it did not work  https://testing-library.com/docs/example-react-transition-group/
  if (process.env.NODE_ENV === 'test') {
    return children;
  }
  return (
    <CSSTransition {...props} timeout={500} classNames="fade">
      {children}
    </CSSTransition>
  );
}
