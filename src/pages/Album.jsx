import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import Loading from '../components/Loading';
import Header from '../components/Header';

export default function Album(props) {
  const [loading, setLoading] = useState(false);
  const [albumInfo, setAlbumInfo] = useState([]);

  useEffect(() => {
    const fetchMusic = async () => {
      const { match: { params: { id } } } = props;

      setLoading(true);
      const album = await getMusics(id);
      setAlbumInfo(album);
      setLoading(false);
    };
    fetchMusic();
  }, [props]);

  return (
    loading || albumInfo.length === 0 ? <Loading />
      : (
        <>
          <Header />
          <main data-testid="page-album">
            <div>
              <img src={ albumInfo[0].artworkUrl100 } alt="Album Cover" />
              <h3 data-testid="album-name">{ albumInfo[0].collectionName }</h3>
              <h4 data-testid="artist-name">{ albumInfo[0].artistName }</h4>
            </div>
            <div>
              {albumInfo.slice(1).map((track) => (<MusicCard
                key={ track.trackId }
                track={ track }
                // favoriteSongs={ favoriteSongs }
              />))}
            </div>
          </main>
        </>
      )
  );
}

Album.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
