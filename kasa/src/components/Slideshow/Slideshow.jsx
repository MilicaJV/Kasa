import React, { useState } from 'react';

const Slideshow = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const length = pictures?.length || 0;

  if (!pictures || length === 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slideshow-container">
      {length > 1 && (
        <>
          <button className="arrow left" onClick={prevSlide}>❮</button>
          <button className="arrow right" onClick={nextSlide}>❯</button>
          <span className="counter">{current + 1}/{length}</span>
        </>
      )}

      <img
        src={pictures[current]}
        alt={`slide ${current + 1}`}
        className="slide-image"
      />
    </div>
  );
};

export default Slideshow;