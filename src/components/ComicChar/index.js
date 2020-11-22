import React from 'react';
import './index.css';

const ComicChar = ({ image, name }) => {
  return (
    <div className="container-comicchar">
      <img src={image} alt="" />
      <span>{name}</span>
    </div>
  );
};

export default ComicChar;
