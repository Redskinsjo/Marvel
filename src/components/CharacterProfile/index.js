import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import './index.css';
import ComicChar from '../ComicChar/index';

const CharacterProfile = ({ navLoc, setNavLoc }) => {
  const params = useParams();
  const [characterData, setCharacterData] = useState({});
  const [comicData, setComicData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const characterRes = await axios.get(
        'http://localhost:3001/character/' + params.id
      );
      setCharacterData(characterRes.data[0]);

      const comicRes = await axios.get(
        'http://localhost:3001/character/' + params.id + '/comics'
      );
      setComicData(comicRes.data);
      setIsLoading(false);
      if (navLoc !== 'character-profile') setNavLoc('character-profile');
    } catch (error) {
      console.log(error);
    }
  };
  let renderComics;
  if (!isLoading) {
    renderComics = comicData.map((comic, index) => {
      return (
        <ComicChar
          image={comic.thumbnail.path + '.' + comic.thumbnail.extension}
          name={comic.title}
          key={index}
        ></ComicChar>
      );
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="super-container-profile">
      {isLoading ? (
        <p>En cours de chargement</p>
      ) : (
        <div className="container-profile">
          <div className="container-char-profile">
            <h1>Character</h1>
            <img
              className="img-profile"
              src={
                characterData.thumbnail.path +
                '.' +
                characterData.thumbnail.extension
              }
              alt=""
            />
            <span>{characterData.name}</span>
          </div>
          <div className="component-comics">
            <h3>Related comics({comicData.length})</h3>
            <div className="container-carousel">{renderComics}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterProfile;
