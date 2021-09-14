import React from "react";
import { Route, Switch } from "react-router";
import styled from "styled-components";
import Create from "../../components/create/Create";
import CreatePost from "../../components/create/CreatePost";
import Post from "../../components/post/Post";
import Posts from "../../components/posts/Posts";

const HomePage = () => {
  const friends = ["John", "Ron", "Silver"];
  return (
    <Main>
      <Friends>
        <Heading>Your Groups</Heading>
        <Friend>
          <Avatar src={"https://picsum.photos/200/"} />
          <Text>Group</Text>
        </Friend>
        <Friend>
          <Avatar src={"https://picsum.photos/200/"} />
          <Text>Group</Text>
        </Friend>
        <Friend>
          <Avatar src={"https://picsum.photos/200/"} />
          <Text>Group</Text>
        </Friend>
        <br />
        <Heading>FRIENDS</Heading>

        {friends.map((item) => {
          return (
            <>
              <Friend>
                <Avatar src={"https://picsum.photos/200/"} />
                <Text>{item}</Text>
              </Friend>
            </>
          );
        })}
      </Friends>
      <Switch>
        <Route exact path="/">
          <Wrapper>
            <Create />
            <Posts />
          </Wrapper>
        </Route>
        <Route exact path="/create">
          <Wrapper>
            <CreatePost />
          </Wrapper>
        </Route>
      </Switch>
      {/* <Friends></Friends> */}
    </Main>
  );
};

export default HomePage;

const Main = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #f6f9fb;
  padding: 0px;
  min-height: 100vh;
`;

const Heading = styled.p``;
const Text = styled.p``;
const Avatar = styled.img`
  border-radius: 100%;
  object-fit: contain;
  margin-right: 1rem;
  height: 2rem;
  aspect-ratio: 1;
`;
const Friend = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  padding: 1rem 0.4rem;

  background-color: transparent;
  border-radius: 0.5rem;
  transition-duration: 200ms;
  transition-delay: 100ms;
  transition-timing-function: ease-in-out;

  margin: 0.5rem;
  &:hover {
    background-color: dodgerblue;
    box-shadow: 0px 0px 5000px 1px #aaaaaa22;
    ${Text} {
      color: white;
    }
  }
`;
const Friends = styled.div`
  position: sticky;
  top: 0px;
  width: 16rem;
  ${Heading} {
    opacity: 0.8;
    font-weight: 600;
  }
  ${Text} {
    transition-duration: 200ms;
    transition-delay: 100ms;
    padding: 0.5rem 5px;
    text-transform: capitalize;
    font-size: 0.8rem;
    font-weight: 600;
  }

  padding: 2rem;
  /* background-color: white; */
  margin-right: 1rem;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

const Wrapper = styled.div`
  background-color: #fff;
  flex: 1;
  min-height: 100vh;
`;
