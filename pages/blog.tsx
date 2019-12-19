import { NextPage } from "next";

import Layout from "../components/Layout";
import { Post } from "../interfaces/Post";
import { fetchPosts } from "../api/postAPI";

type Props = {
  posts: Post[];
};

const Blog: NextPage<Props> = () => (
  <Layout>
    <h1 data-testid="page-title">About</h1>
    <div>blog posts..</div>
  </Layout>
);

Blog.getInitialProps = async () => {
  const posts: Post[] = await fetchPosts();
  console.log(posts);
  return { posts };
};

export default Blog;
