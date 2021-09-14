import React from "react";
import styled from "styled-components";
import { BiEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
const Create = () => {
  return (
    <Link to={"/create"} style={{ textDecoration: "none" }}>
      <Main>
        <Icon>
          <BiEditAlt color="dodgerblue" size={30} />
        </Icon>

        <Text>Create New Post</Text>
      </Main>
    </Link>
  );
};

export default Create;

const Icon = styled.div`
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 1rem;
  width: 2rem;
  font-size: 20px;
`;
const Text = styled.p`
  margin-left: 1rem;
  font-size: 25px;
`;
const Main = styled.div`
  margin: 2rem auto;
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem;
  color: dodgerblue;
  width: 40rem;
  height: 5rem;
  display: flex;
  align-items: center;
  transition-timing-function: ease-in-out;
  transition-duration: 200ms;
  border: solid 5px dodgerblue;
  box-sizing: border-box;
  &:hover {
    background: dodgerblue;
    transform: scale(1.03);
    color: white;
  }
`;
