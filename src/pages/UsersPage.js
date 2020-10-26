import React, {useEffect} from 'react';
import {Content, Header} from 'components';
import UsersSelector from '../store/module/user/Selector';
import {connect} from 'react-redux';
import {getUsers} from '../store/module/user/Actions';

const UsersPage = ({usersList, onClickPosts, getUsers}) => {
  useEffect(() => {
    getUsers();
  }, []);

  if (!usersList) return 'User not found';

  return (
    <>
      <Header nameByPage="Users" />
      <div
        style={{
          width: '90%',
          margin: '70px auto',
        }}
      >
        {usersList.map((user) => (
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
const mapStateToProps = (state) => ({
  usersList: UsersSelector.getUsersSelector(state),
});
const mapDispatchToProps = {
  getUsers,
};

export const UsersPageWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);
