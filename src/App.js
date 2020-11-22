import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from './components/Header/index';
import Characters from './containers/Characters/index';
import CharacterProfile from './components/CharacterProfile/index';
import Comics from './containers/Comics/index';
import Favoris from './containers/Favoris/index';
import Footer from './components/Footer/index';
import Connect from './components/Connect/index';

function App() {
  const [navLoc, setNavLoc] = useState('characters');
  const [modal, displayModal] = useState(false);
  const [searchChar, setSearchChar] = useState('');
  const [searchComic, setSearchComic] = useState('');

  return (
    <Router>
      <Header
        navLoc={navLoc}
        setSearchChar={setSearchChar}
        setSearchComic={setSearchComic}
      />
      <Switch>
        <Route path="/connect">
          <Connect />
        </Route>
        <Route path="/favoris">
          <Favoris navLoc={navLoc} setNavLoc={setNavLoc} />
        </Route>
        <Route path="/comics">
          <Comics
            navLoc={navLoc}
            setNavLoc={setNavLoc}
            searchComic={searchComic}
          ></Comics>
        </Route>
        <Route path="/character/:id">
          <CharacterProfile navLoc={navLoc} setNavLoc={setNavLoc} />
        </Route>
        <Route path="/">
          <Characters
            navLoc={navLoc}
            setNavLoc={setNavLoc}
            searchChar={searchChar}
          />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
