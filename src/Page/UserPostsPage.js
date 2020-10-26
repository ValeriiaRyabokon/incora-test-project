import React, { useEffect, useState } from "react";
import Content from "../components/Content";
import Header from "../components/Header";
import PostsSelector from "../store/module/post/Selector";
import { connect } from "react-redux";
import { getPosts } from "../store/module/post/Actions";
import { useRouteMatch } from "react-router-dom";
import ModalCreate from "../components/ModalCreate";

const UserPostsPage = ({ onClickDetail, postsList, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);

  const match = useRouteMatch();
  const id = match.params.id;
  const newPosts = postsList.filter(post => post.userId === +id);

  const [visibleModalCreate, setVisibleModalCreate] = useState(false);
  const handleClickModalCreate = () => {
    setVisibleModalCreate(!visibleModalCreate);
  };

  if (!newPosts) return "Posts not found";

  return (
    <>
      <Header
        nameByPage="User's Posts"
        nameForFirstButton="Create New Post"
        onClickFirstButton={handleClickModalCreate}
      />
       <div style={{
          width: "90%",
          margin : "80px auto"
      }}>
      {newPosts.map(post => (
        <Content
          nameByPage={`${post.user.name}'s posts`}
          nameForButton="Details"
          id={post.id}
          name={`Title:${post.title}`}
          details={`Body:${post.body
            .split("")
            .splice(0, 20)
            .join("")}...`}
          userId={post.userId}
          onClick={onClickDetail}
          key={post.id}
          handleClickModalCreate={handleClickModalCreate}
          visibleModalCreate={visibleModalCreate}
        />
      ))}
      <ModalCreate
        visible={visibleModalCreate}
        onClose={handleClickModalCreate}
        title="New Post"
      />
      </div>
    </>
  );
};
const mapStateToProps = state => ({
  postsList: PostsSelector.getPostsSelector(state)
});
const mapDispatchToProps = {
  getPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPostsPage);
