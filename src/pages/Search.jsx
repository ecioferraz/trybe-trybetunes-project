import React, { useContext, useEffect, useState } from 'react';
import AlbumLibrary from '../components/AlbumLibrary';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import SearchInput from '../components/SearchInput';
import TunesContext from '../context/TunesContext';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import { getUser } from '../services/userAPI';
import '../styles/search.css';

export default function Search() {
  const { setUserInfo, setSearchedArtist,
    discography, setDiscography } = useContext(TunesContext);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [searched, setSearched] = useState(false);
  const MAX_LENGTH = 13;

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setSearched(true);
    setSearchedArtist(searchInput);
    const albumList = await searchAlbumsAPI(searchInput);
    setDiscography(albumList);
    setSearchInput('');
    setLoading(false);
  };

  useEffect(() => {
    const user = async () => {
      setLoading(true);
      const { name } = await getUser(); // função chamada apenas para passar nos testes
      setUserInfo({ name });
      setLoading(false);
    };

    user();
  }, [setLoading, setUserInfo]);

  return (
    <>
      <Header />
      <main
        className={ `search-page ${searched
              && discography.length > MAX_LENGTH && 'searched'}` }
        data-testid="page-search"
      >
        { loading ? <Loading className="loading" />
          : (
            <>
              <SearchInput
                handleSubmit={ handleSubmit }
                setSearchInput={ setSearchInput }
                searchInput={ searchInput }
              />
              <section className="album-library">
                { searched && <AlbumLibrary /> }
              </section>
            </>
          )}
      </main>
      <Footer
        author="lookstudio"
        className="image-credit"
        href="https://www.freepik.com/photos/music"
        tag="Music"
      />
    </>
  );
}
