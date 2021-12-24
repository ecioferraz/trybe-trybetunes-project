import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import TunesContext from '../context/TunesContext';
import { getUser } from '../services/userAPI';

export default function Profile() {
  const [loading, setLoading] = useState(false);
  const { userInfo: { name, email, description, image },
    setUserInfo } = useContext(TunesContext);

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
          <main data-testid="page-profile">
            <img
              alt="Imagem do usuário"
              data-testid="profile-image"
              src={ image }
            />
            <Link to="/profile/edit">
              <button type="button">Editar perfil</button>
            </Link>
            <h4>Nome</h4>
            <p>{ name }</p>
            <h4>Email</h4>
            <p>{ email }</p>
            <h4>Descrição</h4>
            <p>{ description }</p>
          </main>
        )}
    </>
  );
}
