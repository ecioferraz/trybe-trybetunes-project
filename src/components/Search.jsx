import React, { Component } from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import AlbumLibrary from './AlbumLibrary';
import Loading from './Loading';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: '',
      loading: false,
      albumList: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    this.setState({
      loading: true,
    });
    const { artist } = this.state;
    const resp = await searchAlbumsAPI(artist);
    this.setState({
      loading: false,
      albumList: resp,
    });
  }

  render() {
    const { artist, loading, albumList } = this.state;
    const MIN_LENGTH = 2;

    if (loading) return <Loading />;
    return (
      <div data-testid="page-search">
        <form>
          <fieldset>
            <label htmlFor="search-artist-input">
              <input
                data-testid="search-artist-input"
                type="text"
                name="artist"
                id="search-artist-input"
                onChange={ this.handleChange }
              />
            </label>
            <button
              type="button"
              data-testid="search-artist-button"
              disabled={ artist.length < MIN_LENGTH }
              onClick={ this.handleClick }
            >
              Pesquisar
            </button>
          </fieldset>
        </form>
        {(albumList.length === 0)
          ? <h3>Nenhum álbum foi encontrado</h3>
          : <AlbumLibrary albumList={ albumList } artist={ artist } />}
      </div>
    );
  }
}

export default Search;
