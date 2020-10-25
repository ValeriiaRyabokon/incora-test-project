import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, useHistory, Switch, useRouteMatch } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import "./App.css";
import { ConsoleWriter } from "istanbul-lib-report";
function App() {
  let history = useHistory();
  const match=useRouteMatch();
  const [usersList, setUserList] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
      setUserList(data);
    });
  }, []);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_expand=user`)
      .then(({ data }) => {
        setPosts(data);
      });
  }, []);


  const onClickUsers = () => {
    history.push("/users");
  };

  const onClickPosts = id => {
    history.push(`/users/${id}/post`);
    const newPosts = posts.filter(post => post.userId === id);
    setPosts(newPosts);
    console.log(newPosts);
  };
  const onClickDetail = (id, userId) => {
    history.push(`/users/${userId}/post/${id}`);
    const newPosts = posts.filter(post => post.id === id);
    setPosts(newPosts);
    console.log(newPosts);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home onClickUsers={onClickUsers} />
        </Route>

        <Route exact path="/users">
          {usersList &&
            usersList.map(user => (
              <Users
                nameByPage="Users"
                id={user.id}
                name={user.name}
                nameForButton="Posts"
                onClick={onClickPosts}
              />
            ))}
        </Route>
        <Route exact path="/users/:id/post">
          {posts.map(post => (
            <Users
              nameByPage={post.user.name}
              nameForButton="Details"
              id={post.id}
              name={post.title}
              details={post.body}
              userId={post.userId}
              onClick={onClickDetail}
            />
          ))}
        </Route>
        <Route exact path="/users/:userId/post/:id">
        {posts.map(post => (
            <Users
              nameByPage={post.title}
              id={post.id}
              details={post.body}
              
            />
          ))}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
