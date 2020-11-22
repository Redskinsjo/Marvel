import React from 'react';
import FavCharacters from '../../components/FavCharacter/index';
import './index.css';
import FavComic from '../../components/FavComic/index';
import 'antd/dist/antd.css';
import { Empty } from 'antd';

const Favoris = ({ navLoc, setNavLoc }) => {
  const storageChars = localStorage.getItem('fav-characters');

  if (navLoc !== 'favoris') setNavLoc('favoris');
  const favCharacters = JSON.parse(localStorage.getItem('fav-characters'));
  let renderFavCharacters;
  if (favCharacters) {
    renderFavCharacters = favCharacters.map((char, index) => {
      return (
        <FavCharacters
          name={char.name}
          image={char.image}
          key={char.id}
        ></FavCharacters>
      );
    });
  }

  const favComics = JSON.parse(localStorage.getItem('fav-comics'));
  let renderFavComics;
  if (favComics) {
    renderFavComics = favComics.map((comic, index) => {
      return (
        <FavComic
          name={comic.name}
          image={comic.image}
          key={comic.name + index}
        ></FavComic>
      );
    });
  }
  return (
    <div className="super-container-favoris">
      <div className="container-favoris">
        <div className="favoris-characters">
          <h3>Favoris characters</h3>
          <div>
            {favCharacters && favCharacters?.length > 0 ? (
              renderFavCharacters
            ) : (
              <div>
                <Empty></Empty>
              </div>
            )}
          </div>
        </div>
        <div className="favoris-comics">
          <h3>Favoris comics</h3>
          <div>
            {favComics && favComics?.length > 0 ? (
              renderFavComics
            ) : (
              <div>
                <Empty description={'No data'}></Empty>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favoris;
