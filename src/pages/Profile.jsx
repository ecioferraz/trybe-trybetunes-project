import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import TunesContext from '../context/TunesContext';
import { getUser } from '../services/userAPI';
import defaultPic from '../images/vecteezy_vector-cute-ghost_.jpg';
import '../styles/profile.css';
import Footer from '../components/Footer';

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
    loading ? <Loading />
      : (
        <>
          <Header />
          <main className="profile-page" data-testid="page-profile">
            <section className="pic-btn-container">
              <img
                alt="Imagem do usuário"
                data-testid="profile-image"
                src={ image || defaultPic }
              />
              <Link to="/profile/edit">
                <button type="button">Editar perfil</button>
              </Link>
            </section>
            <section className="user-info-container">
              <h4>Nome</h4>
              <p>{ name }</p>
              <h4>Email</h4>
              <p>{ email }</p>
              <h4>Descrição</h4>
              <p>{ description }</p>
            </section>
          </main>
          <Footer
            author="Vecteezy"
            className="image-credit"
            href="https://www.vecteezy.com/free-photos"
            tag="Free Stock"
          />
        </>
      )
  );
}
