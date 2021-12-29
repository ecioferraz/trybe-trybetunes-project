import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/search.css';

export default function AlbumCard({ album: {
  collectionId, artworkUrl100, collectionName, artistName,
} }) {
  const shortName = (info) => {
    const MAX_LENGTH = 25;
    if (info.length < MAX_LENGTH) return info;
    return info.slice(0, MAX_LENGTH).concat('...');
  };

  return (
    <div className="album-card">
      <Link
        data-testid={ `link-to-album-${collectionId}` }
        to={ `/trybe-trybetunes-project/album/${collectionId}` }
      >
        <img src={ artworkUrl100 } alt="Album Cover" />
        <div>
          <h4>{ shortName(collectionName) }</h4>
          <h5>{ shortName(artistName) }</h5>
        </div>
      </Link>
    </div>
  );
}

AlbumCard.propTypes = {
  album: PropTypes.objectOf(PropTypes.any).isRequired,
};
