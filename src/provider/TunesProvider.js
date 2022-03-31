import PropTypes from 'prop-types';
import React, { useState } from 'react';
import TunesContext from '../context/TunesContext';

const USER_INFO = {
  name: '',
  email: '',
  description: '',
  image: '',
};

export default function TunesProvider({ children }) {
  const [userInfo, setUserInfo] = useState(USER_INFO);
  const [searchedArtist, setSearchedArtist] = useState('');
  const [discography, setDiscography] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const context = {
    userInfo,
    setUserInfo,
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
