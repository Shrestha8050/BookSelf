import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/home';
import Layout from './hoc/layout';
import BookView from './components/Books/index';
import Login from './containers/Admin/login';
import Auth from './hoc/auth';
import User from './components/Admin';
import AddReviews from './containers/Admin/addBook';
import UserPosts from './components/Admin/userPost';
import EditPosts from './components/Admin/edit';
import Register from './containers/Admin/register';
import Logout from './components/Admin/logout';
const routes = () => {
  return (
    <Layout>
      <Switch>
        <Route
          path='/user/user-reviews'
          exact
          component={Auth(UserPosts, true)}
        />
        <Route
          path='/user/edit-post/:id'
          exact
          component={Auth(EditPosts, true)}
        />
        <Route path='/books/:id' exact component={Auth(BookView, null)} />
        <Route path='/user/register' exact component={Auth(Register, true)} />
        <Route path='/user/logout' exact component={Auth(Logout, true)} />
        <Route path='/user/add' exact component={Auth(AddReviews, true)} />
        <Route path='/login' exact component={Auth(Login, false)} />
        <Route path='/user' exact component={Auth(User, true)} />
        <Route path='/' exact component={Auth(Home, null)} />
      </Switch>
    </Layout>
  );
};

export default routes;
