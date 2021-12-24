import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TunesContext from '../context/TunesContext';

export default function Header() {
  const { userInfo } = useContext(TunesContext);

  return (
    <header data-testid="header-component">
      <Link data-testid="link-to-search" to="/search">Search</Link>
      <Link data-testid="link-to-favorites" to="/favorites">Favorites</Link>
      <Link data-testid="link-to-profile" to="/profile">Profile</Link>
      <p data-testid="header-user-name">{ userInfo.name }</p>
    </header>
  );
}
