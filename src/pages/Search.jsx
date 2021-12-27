import React, { useContext, useEffect, useState } from 'react';
import AlbumLibrary from '../components/AlbumLibrary';
import Header from '../components/Header';
import Loading from '../components/Loading';
import TextInput from '../components/TextInput';
import TunesContext from '../context/TunesContext';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import { getUser } from '../services/userAPI';
import '../styles/search.css';

export default function Search() {
  const { setUserInfo, setSearchedArtist, setDiscography } = useContext(TunesContext);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [searched, setSearched] = useState(false);
  const MIN_LENGTH = 2;

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setSearchedArtist(searchInput);
    const albumList = await searchAlbumsAPI(searchInput);
    setDiscography(albumList);
    setSearchInput('');
    setLoading(false);
    setSearched(true);
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

  return loading ? <Loading />
    : (
      <>
        <Header />
        <main
          className={ `search-page ${searched && 'searched'}` }
          data-testid="page-search"
        >
          <form className="search-form" onSubmit={ handleSubmit }>
            <TextInput
              className="search-input"
              dataTestId="search-artist-input"
              name="search"
              onChange={ ({ target: { value } }) => setSearchInput(value) }
              placeholder="Digite um artista ou banda"
              type="text"
              value={ searchInput }
            />
            <button
              className="search-btn"
              data-testid="search-artist-button"
              disabled={ searchInput.length < MIN_LENGTH }
              type="submit"
            >
              Pesquisar
            </button>
          </form>
          <section className="album-library">
            { searched && <AlbumLibrary /> }
          </section>
        </main>
      </>
    );
}
