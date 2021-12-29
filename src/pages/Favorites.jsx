import React, { useContext, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import TunesContext from '../context/TunesContext';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import '../styles/favorites.css';

export default function Favorites() {
  const { favorites, setFavorites } = useContext(TunesContext);
  const [loading, setLoading] = useState(false);
  const MAX_LENGTH = 8;

  const renderFavs = () => {
    if (!favorites.length) {
      return (
        <h3>Nenhuma faixa salva.</h3>
      );
    }
    return (
      <section className="favorited-songs">
        {favorites.map((track) => (<MusicCard
          albumInfo
          key={ track.trackId }
          track={ track }
        />))}
      </section>
    );
  };

  useEffect(() => {
    const fetchFavs = async () => {
      setLoading(true);
      const favs = await getFavoriteSongs();
      setFavorites(favs);
      setLoading(false);
    };

    fetchFavs();
  }, [setFavorites]);

  return (
    <>
      <Header />
      <main
        className={ `favs-page ${favorites.length < MAX_LENGTH && 'favorited'}` }
        data-testid="page-favorites"
      >
        { loading ? <Loading /> : renderFavs()}
      </main>
      <Footer
        author="Vecteezy"
        className="image-credit"
        freepik
        href="https://www.vecteezy.com/free-photos"
        tag="Free Stock"
      />
    </>
  );
}
