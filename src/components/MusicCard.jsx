import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import TunesContext from '../context/TunesContext';

export default function MusicCard({ track, albumInfo }) {
  const { artistName, previewUrl, trackId, trackName } = track;
  const { favorites, setFavorites } = useContext(TunesContext);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = async () => {
    setLoading(true);
    if (!checked) {
      await addSong(track);
      setFavorites([...favorites, track]);
      setChecked(true);
    }
    if (checked) {
      await removeSong(track);
      setFavorites(favorites.filter((fav) => fav.trackId !== trackId));
      setChecked(false);
    }
    setLoading(false);
  };

  const shortName = (info) => {
    const MAX_LENGTH = 25;
    if (info.length < MAX_LENGTH) return info;
    return info.slice(0, MAX_LENGTH).concat('...');
  };

  const checkbox = checked ? <i className="fas fa-heart" /> : <i className="far fa-heart" />;

  useEffect(() => {
    const checkFavorites = async () => {
      const favs = await getFavoriteSongs();
      const isChecked = favs.some((fav) => fav.trackId === trackId);
      setChecked(isChecked);
    };

    checkFavorites();
  }, [setChecked, trackId]);

  return (
    <section className="album-tracks">
      <div>
        <h5>
          { albumInfo && `${shortName(artistName)} - ` }
          { shortName(trackName) }
        </h5>
      </div>
      <div className="audio-fav-container">
        <div className="audio-container">
          <audio
            className="player"
            controls
            data-testid="audio-component"
            src={ previewUrl }
          >
            <track kind="captions" />
            O seu navegador não suporta o elemento
            {' '}
            <code>audio</code>
            .
          </audio>
        </div>
        { (loading) ? <Loading className="like-loading" heart />
          : (
            <div className="checkbox-container">
              <label htmlFor={ `fav-${trackId}` }>
                { checkbox }
                <input
                  checked={ checked }
                  className="fav-checkbox"
                  data-testid={ `checkbox-music-${trackId}` }
                  hidden
                  id={ `fav-${trackId}` }
                  onChange={ handleChange }
                  type="checkbox"
                />
              </label>
            </div>
          )}
      </div>
    </section>
  );
}

MusicCard.propTypes = {
  track: PropTypes.objectOf(PropTypes.any).isRequired,
  albumInfo: PropTypes.bool.isRequired,
};
