import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextInput from '../components/TextInput';
import TunesContext from '../context/TunesContext';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

export default function Login() {
  const { username, setUsername } = useContext(TunesContext);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const MIN_LENGTH = 3;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name } = username;

    setLoading(true);
    await createUser({ name });
    setLoading(false);

    history.push('/search');
  };

  return (
    loading ? <Loading />
      : (
        <main data-testid="page-login">
          <form onSubmit={ handleSubmit }>
            <TextInput
              className="login-input"
              dataTestId="login-name-input"
              name="name"
              onChange={ ({ target: { value } }) => setUsername({ name: value }) }
              placeholder="Digite seu nome"
              type="text"
              value={ username.name }
            />
            <button
              data-testid="login-submit-button"
              disabled={ username.name.length < MIN_LENGTH }
              type="submit"
            >
              Entrar
            </button>
          </form>
        </main>)
  );
}
