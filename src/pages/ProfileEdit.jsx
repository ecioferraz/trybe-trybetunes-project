import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import TextInput from '../components/TextInput';
import TunesContext from '../context/TunesContext';
import { getUser, updateUser } from '../services/userAPI';
import defaultPic from '../images/vecteezy_vector-cute-ghost_.jpg';

export default function ProfileEdit() {
  const [loading, setLoading] = useState(false);
  const { userInfo, setUserInfo } = useContext(TunesContext);
  const { name, email, description, image } = userInfo;
  const history = useHistory();

  const handleSubmitt = async (event) => {
    event.preventDefault();

    setLoading(true);
    await updateUser(userInfo);
    setLoading(false);

    history.push('/profile');
  };

  const disableBtn = () => {
    const disable = !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/.test(email))
    || !name || !description || !image;
    return disable;
  };

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const user = await getUser();
      setUserInfo(user);
      setLoading(false);
    };
    fetchUser();
  }, [setUserInfo]);

  return (
    <>
      <Header />
      { loading ? <Loading />
        : (
          <main data-testid="page-profile-edit">
            <form onSubmit={ handleSubmitt }>
              <TextInput
                className="profile-input"
                dataTestId="edit-input-name"
                labelText="Nome"
                name="name"
                onChange={ ({ target: { value } }) => setUserInfo({
                  name: value, email, description, image }) }
                type="text"
                value={ name }
              />
              <TextInput
                className="profile-input"
                dataTestId="edit-input-email"
                labelText="Email"
                name="email"
                onChange={ ({ target: { value } }) => setUserInfo({
                  name, email: value, description, image }) }
                type="email"
                value={ email }
              />
              <label htmlFor="description">
                Descrição
                <textarea
                  className="profile-textarea-input"
                  data-testid="edit-input-description"
                  name="description"
                  onChange={ ({ target: { value } }) => setUserInfo({
                    name, email, description: value, image }) }
                  value={ description }
                />
              </label>
              <img
                alt="Imagem do usuário"
                data-testid="profile-image"
                src={ image || defaultPic }
              />
              <TextInput
                className="profile-image-input"
                dataTestId="edit-input-image"
                labelText="Imagem de perfil"
                name="profile-pic"
                onChange={ ({ target: { value } }) => setUserInfo({
                  name, email, description, image: value }) }
                type="text"
                value={ image }
              />
              <button
                data-testid="edit-button-save"
                disabled={ disableBtn() }
                type="submit"
              >
                Salvar
              </button>
            </form>
          </main>
        )}
    </>
  );
}
