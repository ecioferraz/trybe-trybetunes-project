import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import Loading from '../components/Loading';
import Header from '../components/Header';
import '../styles/album.css';
import Footer from '../components/Footer';

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
          <main className="album-page" data-testid="page-album">
            <div className="album">
              <div className="album-info">
                <img src={ albumInfo[0].artworkUrl100 } alt="Album Cover" />
                <h3 data-testid="album-name">{ albumInfo[0].collectionName }</h3>
                <h4 data-testid="artist-name">{ albumInfo[0].artistName }</h4>
              </div>
              <div className="album-tracks">
                {albumInfo.slice(1).map((track) => (<MusicCard
                  key={ track.trackId }
                  track={ track }
                />))}
              </div>
            </div>
          </main>
          <Footer
            author="prostooleh"
            className="image-credit left"
            href="https://www.freepik.com/photos/music"
            tag="Music"
          />
        </>
      )
  );
}

Album.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
