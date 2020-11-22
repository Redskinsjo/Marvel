import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Cookies from 'js-cookie';
import { message } from 'antd';

const Char = ({ image, details, name, id }) => {
  return (
    <div className="super-container-char">
      <Link to={`/character/${id}`}>
        <div className="container-char">
          <img className="image-char" src={image} alt="" />
          <div className="info-char">
            <span>{name}</span>
          </div>
        </div>
      </Link>
      <div className="extra-info-char">
        <a href={details || null}>Details</a>
        <div
          onClick={(e) => {
            if (!localStorage.getItem('fav-characters')) {
              const favoris = JSON.stringify([{ name, image, id }]);
              localStorage.setItem('fav-characters', favoris);
              message.success('Character well added to Favoris', 2);
            } else {
              const favoris = JSON.parse(
                localStorage.getItem('fav-characters')
              );
              let isExist = false;
              for (let i = 0; i < favoris.length; i++) {
                if (favoris[i].id === id) {
                  isExist = true;
                }
              }
              if (!isExist) {
                const newFavoris = [...favoris];
                newFavoris.push({
                  name,
                  image,
                  id,
                });
                localStorage.setItem(
                  'fav-characters',
                  JSON.stringify(newFavoris)
                );
                message.success('Character well added to Favoris', 2);
              } else {
                message.info('Character already exists as a Favori', 2);
              }
            }
          }}
        >
          <i style={{ color: 'white' }} className="fas fa-thumbs-up"></i>
          <span>Add to favoris</span>
        </div>
      </div>
    </div>
  );
};

export default Char;
