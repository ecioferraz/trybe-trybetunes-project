import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import TunesContext from '../context/TunesContext';

export default function MusicCard({ track }) {
  const { trackName, previewUrl, trackId } = track;
  const { favorites, setFavorites } = useContext(TunesContext);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = async () => {
    setLoading(true);
    await addSong(track);
    setFavorites([...favorites, track]);
    setChecked(true);
    setLoading(false);
  };

  useEffect(() => {
    const checkFavorites = async () => {
      const favs = await getFavoriteSongs();
      const isChecked = favs.some((fav) => fav.trackId === trackId);
      setChecked(isChecked);
    };

    checkFavorites();
  }, [setChecked, trackId]);

  return (
    <section>
      <div>
        <h5>{ trackName }</h5>
      </div>
      <div>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
      </div>
      { (loading) ? <Loading />
        : (
          <input
            checked={ checked }
            data-testid={ `checkbox-music-${trackId}` }
            onChange={ handleChange }
            type="checkbox"
          />
        )}
    </section>
  );
}

MusicCard.propTypes = {
  track: PropTypes.objectOf(PropTypes.any).isRequired,
};
