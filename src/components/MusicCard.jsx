import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MusicCardInput from './MusicCardInput';

class MusicCard extends Component {
  render() {
    const { track } = this.props;
    const { trackName, previewUrl } = track;
    return (
      <section>
        <div>
          <h5>{ trackName }</h5>
        </div>
        <div>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            {' '}
            <code>audio</code>
            .
          </audio>
        </div>
        <div>
          <MusicCardInput track={ track } />
        </div>
      </section>
    );
  }
}

MusicCard.propTypes = {
  track: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MusicCard;
