import PropTypes from 'prop-types';
import React, { useState } from 'react';
import TunesContext from '../context/TunesContext';

export default function TunesProvider({ children }) {
  const [username, setUsername] = useState({ name: '' });
  const [searchedArtist, setSearchedArtist] = useState('');
  const [discography, setDiscography] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const context = {
    username,
    setUsername,
    searchedArtist,
    setSearchedArtist,
    discography,
    setDiscography,
    favorites,
    setFavorites,
  };

  return (
    <TunesContext.Provider value={ context }>
      { children }
    </TunesContext.Provider>
  );
}

TunesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
