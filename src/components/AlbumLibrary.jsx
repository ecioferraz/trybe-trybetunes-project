import React, { useContext, useEffect } from 'react';
import TunesContext from '../context/TunesContext';
import AlbumCard from './AlbumCard';

export default function AlbumLibrary() {
  const { searchedArtist, discography } = useContext(TunesContext);

  useEffect(() => console.log(discography), [discography]);

  return (
    <>
      <p>
        Resultado de álbuns de:
        {' '}
        { searchedArtist }
      </p>
      { discography.length === 0
        ? (<h3>Nenhum álbum foi encontrado</h3>)
        : discography.map((album) => (
          <AlbumCard album={ album } key={ album.collectionId } />
        ))}
    </>
  );
}
