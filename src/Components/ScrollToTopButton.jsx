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
      <button onClick={scrollToTop} className="fixed bottom-5 md:bottom-10 right-3 md:right-6 bg-gray-300 bg-opacity-70 hover:bg-opacity-100 border-2 border-gray-500 rounded-full text-lg md:text-3xl text-black p-4 md:p-6">
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
