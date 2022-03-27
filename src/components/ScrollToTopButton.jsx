// ref: https://dev.to/prnvbirajdar/react-hooks-component-to-smooth-scroll-to-the-top-35fd
import React from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <div onClick={scrollToTop}>
          <h3 className='scroll-top-button'>TOPO</h3>
        </div>
      )}
    </div>
  );
}