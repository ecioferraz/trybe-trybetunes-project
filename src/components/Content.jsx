import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Album from './Album';
import Favorites from './Favorites';
import Login from './Login';
import Profile from './Profile';
import ProfileEdit from './ProfileEdit';
import NotFound from './NotFound';
import Search from './Search';

class Content extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/search" component={ Search } />
          <Route
            exact
            path="/album/:id"
            render={ (props) => <Album { ...props } /> }
          />
          <Route exact path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Content;
