import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Search from '../pages/Search';
import Album from '../pages/Album';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';
import ProfileEdit from '../pages/ProfileEdit';

export default function Routes() {
  return (
    <Switch>
      <Route
        exact
        path="/trybe-trybetunes-project/"
        component={ Login }
      />
      <Route
        exact
        path="/trybe-trybetunes-project/search"
        component={ Search }
      />
      <Route
        exact
        path="/trybe-trybetunes-project/album/:id"
        component={ Album }
      />
      <Route
        exact
        path="/trybe-trybetunes-project/favorites"
        component={ Favorites }
      />
      <Route
        exact
        path="/trybe-trybetunes-project/profile"
        component={ Profile }
      />
      <Route
        exact
        path="/trybe-trybetunes-project/profile/edit"
        component={ ProfileEdit }
      />
    </Switch>
  );
}
