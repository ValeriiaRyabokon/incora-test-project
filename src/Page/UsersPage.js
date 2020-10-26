import React, { useEffect } from "react";
import Content from "../components/Content";
import UsersSelector from "../store/module/user/Selector";
import { connect } from "react-redux";
import { getUsers } from "../store/module/user/Actions";
import Header from "../components/Header";

const UsersPage = ({ usersList, onClickPosts, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, []);
  console.log(usersList);
  if (!usersList) return "User not found";

  return (
    <>
      <Header nameByPage="Users" />
      <div style={{
          width: "90%",
          margin : "80px auto"
      }}>
      {usersList.map(user => (
        <Content
          nameByPage="Users"
          key={user.id}
          id={user.id}
          name={user.name}
          nameForButton="Posts"
          onClick={onClickPosts}
        />
      ))}
      </div>
    </>
  );
};
const mapStateToProps = state => ({
  usersList: UsersSelector.getUsersSelector(state)
});
const mapDispatchToProps = {
  getUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);