import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 1000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button onClick={scrollToTop} className="fixed bottom-5 md:bottom-10 right-3 md:right-6 bg-white rounded-full text-lg md:text-3xl text-black py-4 px-6 md:py-6 md:px-8">
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
