import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TunesContext from '../context/TunesContext';
import '../styles/header.css';

export default function Header() {
  const { userInfo } = useContext(TunesContext);

  return (
    <header data-testid="header-component">
      <nav>
        <h1 className="logo">TrybeTunes</h1>
        <ul>
          <li>
            <Link data-testid="link-to-search" to="/trybe-trybetunes-project/search">Search</Link>
          </li>
          <li>
            <Link data-testid="link-to-favorites" to="/trybe-trybetunes-project/favorites">Favorites</Link>
          </li>
          <li>
            <Link data-testid="link-to-profile" to="/trybe-trybetunes-project/profile">Profile</Link>
          </li>
        </ul>
        <div className="username">
          <h2 data-testid="header-user-name">{ userInfo.name }</h2>
        </div>
      </nav>
    </header>
  );
}
