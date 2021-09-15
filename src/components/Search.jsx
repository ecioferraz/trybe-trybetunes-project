import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      // loading: false,
      // redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name } = this.state;
    const MIN_LENGTH = 2;
    return (
      <div data-testid="page-search">
        <form>
          <fieldset>
            <label htmlFor="search-artist-input">
              <input
                data-testid="search-artist-input"
                type="text"
                name="name"
                id="search-artist-input"
                onChange={ this.handleChange }
              />
            </label>
            <button
              type="button"
              data-testid="search-artist-button"
              disabled={ name.length < MIN_LENGTH }
              // onClick={ this.handleClick }
            >
              Entrar
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Search;
