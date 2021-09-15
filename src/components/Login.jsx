import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      loading: false,
      redirect: false,
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
    const { name } = this.state;
    await createUser({ name });
    this.setState({
      loading: false,
      redirect: true,
    });
  }

  render() {
    const { name, loading, redirect } = this.state;
    const MIN_LENGTH = 3;

    if (loading) return <Loading />;
    if (redirect) return <Redirect to="/search" />;
    return (
      <div data-testid="page-login">
        <form>
          <fieldset>
            <label htmlFor="login-name-input">
              Nome:
              <input
                data-testid="login-name-input"
                type="text"
                name="name"
                id="login-name-input"
                onChange={ this.handleChange }
              />
            </label>
            <button
              type="button"
              data-testid="login-submit-button"
              disabled={ name.length < MIN_LENGTH }
              // ref https://stackoverflow.com/questions/41303289/disable-button-if-input-length-less-than-3
              onClick={ this.handleClick }
            >
              Entrar
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Login;
