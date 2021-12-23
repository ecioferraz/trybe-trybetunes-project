import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

export default function MusicCard({ track }) {
  const { trackName, previewUrl, trackId } = track;
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = async () => {
    setLoading(true);
    if (!checked) {
      await addSong(track);
      setChecked(true);
    }
    if (checked) {
      await removeSong(track);
      setChecked(false);
    }
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
