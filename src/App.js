import React from 'react';
import "./App.css";
import {Route, useHistory, Switch} from 'react-router-dom';
import {
  UsersPageWrapper,
  UserPostsPageWrapper,
  PostDetailWrapper,
  HomePage,
} from 'pages';

export const App = () => {
  const history = useHistory();

  const onClickUsers = () => {
    history.push('/users');
  };

  const onClickPosts = (id) => {
    history.push(`/users/${id}`);
  };

  const onClickDetail = (id, userId) => {
    history.push(`/users/${userId}/post/${id}`);
  };

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => <HomePage onClickUsers={onClickUsers} />}
        />
        <Route
          exact
          path="/users"
          render={() => <UsersPageWrapper onClickPosts={onClickPosts} />}
        />
        <Route
          exact
          path="/users/:id/"
          render={() => <UserPostsPageWrapper onClickDetail={onClickDetail} />}
        />
        <Route
          exact
          path="/users/:userId/post/:id"
          render={() => <PostDetailWrapper />}
        />
      </Switch>
    </div>
  );
};
