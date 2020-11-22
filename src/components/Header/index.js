import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.svg';
import './index.css';

const Header = ({
  navLoc,
  token,
  displayModal,
  setSearchChar,
  setSearchComic,
}) => {
  const nav = { textDecoration: 'underline' };

  let style = { borderBottom: 'dotted 0.5px silver' };

  return (
    <div className="super-container-header">
      <div className="container-header">
        <div className="container-img-header">
          <img src={Logo} alt="" />
        </div>
        {/* <div className="container-connect-header"></div> */}
      </div>
      <div
        style={navLoc !== 'characters' && navLoc !== 'comics' ? style : null}
        className="container-menu"
      >
        <ul>
          <li style={navLoc === 'characters' ? nav : null}>
            <Link to="/">Characters</Link>
          </li>
          <li style={navLoc === 'comics' ? nav : null}>
            <Link to="/comics">Comics</Link>
          </li>
          <li style={navLoc === 'favoris' ? nav : null}>
            <Link to="/favoris">Favoris</Link>
          </li>
          {token ? (
            <li
              type="open-a-confirmation-modal"
              onClick={() => {
                displayModal(true);
              }}
            >
              Disconnect
            </li>
          ) : (
            <Link to="/connect">
              <li>Connect</li>
            </Link>
          )}
        </ul>
      </div>
      {navLoc === 'characters' || navLoc === 'comics' ? (
        <div className="container-search">
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              onChange={(e) => {
                if (navLoc === 'characters') setSearchChar(e.target.value);
                if (navLoc === 'comics') setSearchComic(e.target.value);
              }}
            />
            <i
              style={{
                position: 'absolute',
                color: 'white',
                fontSize: '30px',
                left: '60px',
              }}
              className="fab fa-searchengin"
            ></i>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
