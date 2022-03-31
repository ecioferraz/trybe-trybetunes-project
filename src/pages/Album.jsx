import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/getMusics';
import Loading from '../components/Loading';
import Header from '../components/Header';
import '../styles/album.css';
import Footer from '../components/Footer';

export default function Album(props) {
  const [loading, setLoading] = useState(false);
  const [albumInfo, setAlbumInfo] = useState([]);
  const MAX_LENGTH = 5;

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
    <>
      <Header />
      <main
        className={ `album-page ${albumInfo.length < MAX_LENGTH
          && 'full-page'} ${loading && 'is-loading'}` }
        data-testid="page-album"
      >
        { loading || albumInfo.length === 0 ? <Loading />
          : (
            <div className="album">
              <div className="album-info">
                <img src={ albumInfo[0].artworkUrl100 } alt="Album Cover" />
                <h3 data-testid="album-name">{ albumInfo[0].collectionName }</h3>
                <h4 data-testid="artist-name">{ albumInfo[0].artistName }</h4>
              </div>
              {albumInfo.slice(1).map((track) => (<MusicCard
                key={ track.trackId }
                track={ track }
              />))}
            </div>
          )}
      </main>
      <Footer
        author="prostooleh"
        className="image-credit left"
        href="https://www.freepik.com/photos/music"
        tag="Music"
      />
    </>
  );
}

Album.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
