import { NextPage } from "next";

import Layout from "../components/Layout";
import PostItem from "../components/PostItem";
import { Post } from "../interfaces/Post";
import { fetchPosts } from "../api/postAPI";

type Props = {
  posts: Post[];
};

const Blog: NextPage<Props> = ({ posts }) => (
  <Layout>
    <h1 data-testid="page-title">Blog</h1>
    <div className="Post__List">
      {posts.map(
        (post: Post): JSX.Element => (
          <PostItem key={post.id} post={post} />
        )
      )}
    </div>
  </Layout>
);

Blog.getInitialProps = async () => {
  const posts: Post[] = await fetchPosts();
  console.log(posts);
  return { posts };
};

export default Blog;
