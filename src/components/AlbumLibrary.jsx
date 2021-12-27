import React, { useContext } from 'react';
import TunesContext from '../context/TunesContext';
import AlbumCard from './AlbumCard';

export default function AlbumLibrary() {
  const { searchedArtist, discography } = useContext(TunesContext);

  return (
    <>
      <p>
        Resultado de álbuns de:
        {' '}
        { searchedArtist }
      </p>
      <section className="album-cards">
        { discography.length === 0
          ? (<h3>Nenhum álbum foi encontrado</h3>)
          : discography.map((album) => (
            <AlbumCard album={ album } key={ album.collectionId } />
          ))}
      </section>
    </>
  );
}
