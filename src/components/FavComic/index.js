import React from 'react';
import './index.css';
import { message } from 'antd';

const FavComic = ({ image, name }) => {
  return (
    <div className="container-comic6">
      <img src={image} alt="" />
      <span>{name}</span>
      <div className="remove-comic2">
        <i className="fas fa-trash-alt"></i>
        <span
          onClick={() => {
            const favComics = JSON.parse(localStorage.getItem('fav-comics'));
            let newFavComics = favComics.filter((comic) => {
              return comic.image !== image;
            });
            newFavComics = JSON.stringify(newFavComics);
            localStorage.setItem('fav-comics', newFavComics);
            message.success('Your favorite comic has been deleted');
          }}
        >
          Remove item
        </span>
      </div>
    </div>
  );
};

export default FavComic;
