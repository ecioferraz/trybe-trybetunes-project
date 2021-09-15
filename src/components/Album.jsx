import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import Loading from './Loading';
import MusicCard from './MusicCard';

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: '',
      album: '',
      tracklist: [],
      albumCover: '',
      loading: false,
    };
    this.fetchMusic = this.fetchMusic.bind(this);
  }

  componentDidMount() {
    this.fetchMusic();
  }

  async fetchMusic() {
    this.setState({
      loading: true,
    });
    const { match: { params: { id } } } = this.props;
    const resp = await getMusics(id);
    this.setState({
      artist: resp[0].artistName,
      album: resp[0].collectionName,
      tracklist: resp.slice(1),
      albumCover: resp[0].artworkUrl100,
      loading: false,
    });
  }

  render() {
    const { artist, album, tracklist, albumCover, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <>
        <div data-testid="page-album">
          <img src={ albumCover } alt="Album Cover" />
          <h4 data-testid="album-name">{ album }</h4>
          <h3 data-testid="artist-name">{ artist }</h3>
        </div>
        <div>
          {tracklist.map((track) => <MusicCard key={ track.trackId } track={ track } />)}
        </div>
      </>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Album;
