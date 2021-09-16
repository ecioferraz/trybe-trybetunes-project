import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCardInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    this.setState({
      loading: true,
    });
    const { track } = this.props;
    await addSong(track);
    this.setState({
      loading: false,
    });
  }

  render() {
    const { track: { trackId } } = this.props;
    const { loading } = this.state;

    if (loading) return <Loading />;
    return (
      <label
        data-testid={ `checkbox-music-${trackId}` }
        htmlFor={ `checkbox-music-${trackId}` }
      >
        <input
          type="checkbox"
          id={ `checkbox-music-${trackId}` }
          onClick={ this.handleClick }
        />
      </label>
    );
  }
}

MusicCardInput.propTypes = {
  track: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MusicCardInput;
