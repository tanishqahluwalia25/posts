import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import postsAction from "../../actions/posts";
import Post from "../post/Post";

const Posts = () => {
  const dispatch = useDispatch();
  const { isLoading, loadSuccess, loadResponse, createdPosts } = useSelector(
    (state) => state.posts
  );
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    dispatch(postsAction());
  }, []);

  useEffect(() => {
    console.log(loadResponse);
    if (loadSuccess === true) {
      setPosts([...loadResponse]);
    }
    if (createdPosts !== [] && loadResponse !== []) {
      setPosts([...createdPosts, ...loadResponse]);
    } else if (createdPosts !== []) {
      setPosts([...createdPosts]);
    }
  }, [loadResponse, isLoading]);

  return (
    <>
      {posts.map((item) => {
        return <Post key={item.userId} data={item} />;
      })}

      {/* {JSON.stringify(loadResponse)} */}
    </>
  );
};

export default Posts;
