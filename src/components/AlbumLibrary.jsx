import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AlbumCard from './AlbumCard';

class AlbumLibrary extends Component {
  render() {
    const { albumList, artist } = this.props;

    if (albumList.length === 0) return <h3>Nenhum álbum foi encontrado</h3>;
    return (
      <div>
        <p>
          Resultado de álbuns de:
          {' '}
          { artist }
        </p>
        {albumList.map((album) => (
          <AlbumCard key={ album.collectionId } album={ album } />
        ))}
      </div>
    );
  }
}

AlbumLibrary.propTypes = {
  albumList: PropTypes.arrayOf(PropTypes.object).isRequired,
  artist: PropTypes.string.isRequired,
};

export default AlbumLibrary;
