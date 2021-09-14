import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { createPostAction } from "../../actions/posts";

const CreatePost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [titleError, setTitleError] = useState("");
  const [bodyError, setBodyError] = useState("");
  const history = useHistory();
  const handleSubmit = () => {
    const data = {
      title,
      body,
      userId: 1,
      id: Math.floor(Math.random() + 100),
    };

    if (title === "") {
      setTitleError("Title can't be empty");
    } else setTitleError("");
    if (body === "") {
      setBodyError("Body can't be empty");
    } else {
      setBodyError("");
    }
    if (title === "" || body === "") {
      return;
    }
    dispatch(createPostAction(data));
    history.replace("/");
  };
  return (
    <Main>
      <HeadingText
        placeholder="Post Heading"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <Error>{titleError}</Error>
      <TextBox
        placeholder="Post Details"
        draggable={false}
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
      <Error>{bodyError}</Error>
      <Options>
        <Button
          color="dodgerblue"
          onClick={() => {
            handleSubmit();
          }}
        >
          Post
        </Button>
        <Button
          color="tomato"
          onClick={() => {
            history.replace("/");
          }}
        >
          Cancel
        </Button>
      </Options>
    </Main>
  );
};

export default CreatePost;

const Error = styled.p`
  padding: 0.5rem;
  color: tomato;
  font-size: 12px;
`;
const Button = styled.p`
  margin-left: 1rem;
  text-decoration: none;
  background-color: white;
  border-radius: 10px;
  color: ${(props) => props.color};
  padding: 0.5rem;

  width: 4rem;
  border: 2px solid ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms ease-in-out;
  &:hover {
    background-color: ${(props) => props.color};
    color: white;
  }
`;

const Main = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  min-height: 20rem;
  width: 80%;

  box-shadow: 0px 0px 5000px 1px #aaaaaa55;
`;
const HeadingText = styled.input`
  /* flex: 0.5; */
  font-size: 24px;
  padding: 0.5rem;
  font-weight: 700;
  text-transform: capitalize;
  border-color: transparent;
  &:focus {
    border-color: transparent;
    outline: none;
  }
`;
const TextBox = styled.textarea`
  flex: 1;
  border-color: transparent;
  padding: 0.5rem;
  font-size: 18px;
  resize: none;
  &:focus {
    border-color: transparent;
    outline: none;
  }
`;
const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
