import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { message } from 'antd';

const FavCharacters = ({ id, name, image, details }) => {
  return (
    <div className="super-container-favchar">
      <Link to={`/character/${id}`}>
        <div className="container-favchar">
          <img className="image-favchar" src={image} alt="" />
          <div className="info-favchar">
            <span>{name}</span>
          </div>
        </div>
      </Link>
      <div className="extra-info-favchar">
        <a href={details || null}>Details</a>
        <div className="extra-remove">
          <i className="fas fa-trash-alt"></i>
          <span
            onClick={() => {
              const favChars = JSON.parse(
                localStorage.getItem('fav-characters')
              );
              let newFavChars = favChars.filter((comic) => {
                return comic.image !== image;
              });
              newFavChars = JSON.stringify(newFavChars);
              localStorage.setItem('fav-characters', newFavChars);
              message.success('Your favorite comic has been deleted');
            }}
          >
            Remove item
          </span>
        </div>
      </div>
    </div>
  );
};

export default FavCharacters;
