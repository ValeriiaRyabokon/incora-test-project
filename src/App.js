import React from "react";
import { Route, useHistory, Switch} from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import UsersPage from "./Page/UsersPage";
import UserPostsPage from "./Page/UserPostsPage";
import PostDetail from "./Page/PostDetail";
function App() {
  let history = useHistory();

const onClickUsers = () => {
    history.push("/users");
  };

  const onClickPosts = id => {
    history.push(`/users/${id}`);
  };
  const onClickDetail = (id, userId) => {
    history.push(`/users/${userId}/post/${id}`);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() =><Home onClickUsers={onClickUsers} />} />
        <Route exact path="/users" render={()=><UsersPage onClickPosts={onClickPosts}/>} />
        <Route exact path="/users/:id/" render={()=><UserPostsPage  onClickDetail={onClickDetail} />} />
        <Route exact path="/users/:userId/post/:id" render={()=> <PostDetail />} />
      </Switch>
    </div>
  );
}

export default App;
