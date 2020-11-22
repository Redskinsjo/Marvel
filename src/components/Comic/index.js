import { message } from 'antd';
import React from 'react';
import './index.css';

const Comic = ({ name, image }) => {
  return (
    <div className="container-comic">
      <img src={image} alt="" />
      <span>{name}</span>
      <div
        className="comic"
        onClick={(e) => {
          if (!localStorage.getItem('fav-comics')) {
            const favoris = JSON.stringify([{ name, image }]);
            localStorage.setItem('fav-comics', favoris);
            message.success('Comic well added to the Favoris', 2);
          } else {
            const favoris = JSON.parse(localStorage.getItem('fav-comics'));
            let isExist = false;
            for (let i = 0; i < favoris.length; i++) {
              if (favoris[i].image === image) {
                isExist = true;
              }
            }
            if (!isExist) {
              const newFavoris = [...favoris];
              newFavoris.push({
                name,
                image,
              });
              localStorage.setItem('fav-comics', JSON.stringify(newFavoris));
              message.success('Comic well added to the Favoris', 2);
            } else {
              message.info('Comic already exists as a favori', 2);
            }
          }
        }}
      >
        <i style={{ color: 'white' }} className="fas fa-thumbs-up"></i>
        <span>Add to favoris</span>
      </div>
    </div>
  );
};

export default Comic;
