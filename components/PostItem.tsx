import * as React from "react";
import styled from "styled-components";

import { Post } from "../interfaces/Post";

const Wrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 30px;
`;

const Image = styled.img`
  border-radius: 4px;
`;

const Text = styled.p`
  font-size: 22px;
  line-height: 1.5;
  margin-top: 20px;
`;

const Date = styled.div`
  font-size: 14px;
  color: gray;
`;

type Props = {
  post: Post;
};

const PostItem: React.FunctionComponent<Props> = ({ post }) => {
  return (
    <Wrapper>
      <Image
        src={`https://upply-interview.herokuapp.com/images/${post.src}`}
        alt={post.title}
      />
      <Title>{post.title}</Title>
      <Date> {post.date}</Date>
      <Text>{post.text}</Text>
    </Wrapper>
  );
};

export default PostItem;
