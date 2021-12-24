import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextInput from '../components/TextInput';
import TunesContext from '../context/TunesContext';
import { createUser, getUser } from '../services/userAPI';
import Loading from '../components/Loading';
import '../styles/login.css';

export default function Login() {
  const { userInfo, setUserInfo } = useContext(TunesContext);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const MIN_LENGTH = 3;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name } = userInfo;

    setLoading(true);
    await createUser({ name });
    await getUser();
    setLoading(false);

    history.push('/search');
  };

  return (
    loading ? <Loading />
      : (
        <main className="login-page" data-testid="page-login">
          <form className="login-form" onSubmit={ handleSubmit }>
            <h6 className="greetings">Olá! Faça seu login:</h6>
            <section className="input-container">
              <TextInput
                className="login-input"
                dataTestId="login-name-input"
                name="name"
                onChange={ ({ target: { value } }) => setUserInfo({
                  name: value,
                  email: '',
                  image: '',
                  description: '',
                }) }
                placeholder="Digite seu nome"
                type="text"
                value={ userInfo.name }
              />
            </section>
            <button
              className="login-btn"
              data-testid="login-submit-button"
              disabled={ userInfo.name.length < MIN_LENGTH }
              type="submit"
            >
              Entrar
            </button>
          </form>
        </main>)
  );
}
