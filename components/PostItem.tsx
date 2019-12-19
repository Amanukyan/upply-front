import * as React from "react";
import styled from "styled-components";

import { Post } from "../interfaces/Post";

const Wrapper = styled.div``;

const Title = styled.h3``;

const Image = styled.img``;

const Text = styled.p``;

const Date = styled.div``;

type Props = {
  post: Post;
};

const PostItem: React.FunctionComponent<Props> = ({ post }) => {
  return (
    <Wrapper>
      <Image src={`${post.src}`} alt={post.title} />
      <Title>{post.title}</Title>
      <Date> {post.date}</Date>
      <Text>{post.text}</Text>
    </Wrapper>
  );
};

export default PostItem;
