import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import TunesContext from '../context/TunesContext';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

export default function Favorites() {
  const { favorites, setFavorites } = useContext(TunesContext);
  const [loading, setLoading] = useState(false);

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
      { loading ? <Loading />
        : (
          <main data-testid="page-favorites">
            {favorites.map((track) => (<MusicCard
              key={ track.trackId }
              track={ track }
            />))}
          </main>
        )}
    </>
  );
}
