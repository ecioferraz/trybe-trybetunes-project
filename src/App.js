import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Album from './components/Album';
import Favorites from './components/Favorites';
import Login from './components/Login';
import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';
import NotFound from './components/NotFound';
import Search from './components/Search';

class App extends React.Component {
  render() {
    return (
      <>
        <p>TrybeTunes</p>
        <BrowserRouter>
          <Route path="" component={ NotFound } />
          <Route path="/profile/edit" component={ ProfileEdit } />
          <Route path="/profile" component={ Profile } />
          <Route path="/favorites" component={ Favorites } />
          <Route path="/album/:id" component={ Album } />
          <Route path="/search" component={ Search } />
          <Route exact path="/" component={ Login } />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
