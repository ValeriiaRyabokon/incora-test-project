import React, {useEffect, useState} from 'react';
import {Detail, Header, ModalEdit, ModalDelete} from 'components';
import {connect} from 'react-redux';
import PostsSelector from '../store/module/post/Selector';
import {useRouteMatch} from 'react-router-dom';
import {getComments} from '../store/module/comment/Actions';
import {getPosts} from '../store/module/post/Actions';
import CommentsSelector from '../store/module/comment/Selector';

const PostDetail = ({postsList, getPosts, getComments, commentsList}) => {
  useEffect(() => {
    getComments();
    if (postsList.length === 0) {
      getPosts();
    }
  }, []);

  const match = useRouteMatch();
  const id = match.params.id;

  const newPosts = postsList.filter((post) => post.id === +id);
  const newComments = commentsList.filter((comment) => comment.postId === +id);

  const [visibleModalEdit, setVisibleModalEdit] = useState(false);
  const [visibleModalDelete, setVisibleModalDelete] = useState(false);

  const handleClickModalEdit = () => {
    setVisibleModalEdit(!visibleModalEdit);
  };
  const handleClickModalDelete = () => {
    setVisibleModalDelete(!visibleModalDelete);
  };

  return (
    <>
      <Header
        nameByPage="Post"
        nameForFirstButton="Edit"
        nameForSecondButton="Delete"
        onClickFirstButton={handleClickModalEdit}
        onClickSecondButton={handleClickModalDelete}
      />
      {newPosts.map((post) => (
        <Detail details={post.body} obj={newComments} key={post.id} />
      ))}
      <ModalEdit visible={visibleModalEdit} onClose={handleClickModalEdit} />
      <ModalDelete
        visible={visibleModalDelete}
        onClose={handleClickModalDelete}
        id={id}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  postsList: PostsSelector.getPostsSelector(state),
  commentsList: CommentsSelector.getCommentsSelector(state),
});

const mapDispatchToProps = {
  getPosts,
  getComments,
};

export const PostDetailWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
