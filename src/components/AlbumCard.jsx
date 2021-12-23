import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function AlbumCard({ album: {
  collectionId, artworkUrl100, collectionName, artistName,
} }) {
  return (
    <Link
      data-testid={ `link-to-album-${collectionId}` }
      to={ `/album/${collectionId}` }
    >
      <img src={ artworkUrl100 } alt="Album Cover" />
      <div>
        <h4>{ collectionName }</h4>
        <h5>{ artistName }</h5>
      </div>
    </Link>
  );
}

AlbumCard.propTypes = {
  album: PropTypes.objectOf(PropTypes.any).isRequired,
};
