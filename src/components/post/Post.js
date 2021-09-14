import React from "react";
import styled from "styled-components";

const Post = ({ data }) => {
  return (
    <Wrapper>
      <Image
        src={`https://picsum.photos/id/${Math.floor(
          data.id + Math.random(100) + 20
        )}/1000`}
      />
      <Right>
        <Head>
          <Date>
            <Month>SEP</Month>
            <Day>20</Day>
          </Date>
          <Heading>{data.title}</Heading>
        </Head>
        <Content>{data.body}</Content>
        <Line />
        <User>Tanishq Ahluwalia</User>
      </Right>
    </Wrapper>
  );
};

export default Post;
const Line = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: gray;
  /* border-color: gray; */
  opacity: 0.2;
  margin-bottom: 0rem;
`;
const User = styled.p`
  opacity: 0.8;
  font-size: 12px;
`;
const Content = styled.p`
  opacity: 0.4;
  font-size: 12px;
  line-height: 1.5rem;
`;
const Heading = styled.p`
  font-weight: 700;
  margin-left: 1rem;
  font-size: 13px;
`;

const Month = styled.p`
  font-weight: 500;
  font-size: 14px;
  margin: 0px;
  padding: 0px;
  line-height: 0.8rem;
`;
const Day = styled.p`
  font-weight: 800;
  font-size: 20px;
  line-height: 1.5rem;
`;
const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.3rem 0.4rem;

  background-color: #00f4f7;
  color: blue;

  /* height: 3rem;
  width: 2rem; */
  border-radius: 5px;
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 90%;
  padding: 2rem;
`;
const Image = styled.img`
  height: 100%;
  width: auto;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 0.5rem;

  box-shadow: 0px 0px 50px 10px #aaaaaa55;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */

  border-radius: 1rem;

  padding: 0.5rem;
  margin: 1rem auto;

  height: 16rem;
  width: 40rem;

  background-color: white;
  box-shadow: 0px 0px 5000px 1px #aaaaaa55;

  transition-duration: 400ms;
  transition-timing-function: ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
`;
