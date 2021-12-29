import PropTypes from 'prop-types';
import React from 'react';
import TextInput from './TextInput';

export default function SearchInput({ handleSubmit, setSearchInput, searchInput }) {
  const MIN_LENGTH = 2;

  return (
    <form className="search-form" onSubmit={ handleSubmit }>
      <div className="search-container">
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
          <i className="fas fa-search" />
        </button>
      </div>
    </form>
  );
}

SearchInput.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  setSearchInput: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
};
