import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const { track: { trackName, previewUrl } } = this.props;
    return (
      <section>
        <h3>{ trackName }</h3>
        <div>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            {' '}
            <code>audio</code>
            .
          </audio>

        </div>
      </section>
    );
  }
}

MusicCard.propTypes = {
  track: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MusicCard;
