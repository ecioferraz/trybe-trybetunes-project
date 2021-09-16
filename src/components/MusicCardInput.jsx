import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCardInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange() {
    this.setState(({ checked }) => ({
      loading: true,
      checked: !checked,
    }));
    const { track } = this.props;
    await addSong(track);
    this.setState({
      loading: false,
    });
  }

  render() {
    const { track: { trackId } } = this.props;
    const { loading, checked } = this.state;

    if (loading) return <Loading />;
    return (
      <label
        data-testid={ `checkbox-music-${trackId}` }
        htmlFor={ `checkbox-music-${trackId}` }
      >
        <input
          type="checkbox"
          id={ `checkbox-music-${trackId}` }
          onChange={ this.handleChange }
          checked={ checked }
        />
      </label>
    );
  }
}

MusicCardInput.propTypes = {
  track: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MusicCardInput;
