import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      name: '',
    };
    this.showUser = this.showUser.bind(this);
  }

  componentDidMount() {
    this.showUser();
  }

  async showUser() {
    this.setState({
      loading: true,
    });
    const resp = await getUser();
    this.setState({
      loading: false,
      name: resp.name,
    });
  }

  render() {
    const { loading, name } = this.state;
    if (loading) return <Loading />;
    return (
      <header className="header" data-testid="header-component">
        <nav>
          <div>
            <Link to="/search" data-testid="link-to-search">Buscar</Link>
            <Link to="/album/:id">Album</Link>
            <Link to="/favorites" data-testid="link-to-favorites">Favoritos</Link>
            <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
            <Link to="/profile/edit">Editar</Link>
          </div>
          <div>
            <p data-testid="header-user-name">{ name }</p>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
