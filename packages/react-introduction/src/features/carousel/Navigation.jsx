import React from 'react';
import { FcPrevious, FcNext } from 'react-icons/fc';

function Navigation({ onPrevClick, onNextClick }) {
  return (
    <div className='carousel-navigation'>
      <div
        className='carousel-navigation-prev'
        onClick={onPrevClick}>
        <FcPrevious />
      </div>
      <div
        className='carousel-navigation-next'
        onClick={onNextClick}>
        <FcNext />
      </div>
    </div>
  );
}

export default Navigation;
