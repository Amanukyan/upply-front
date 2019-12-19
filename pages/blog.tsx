import { NextPage } from "next";
import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";
import PostItem from "../components/PostItem";
import SearchBar from "../components/SearchBar";
import { Post } from "../interfaces/Post";
import { fetchPosts } from "../api/postAPI";

type Props = {
  posts: Post[];
};

const Blog: NextPage<Props> = ({ posts }) => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    const filterPostsByTitle = (
      posts: Post[],
      searchString: string
    ): Post[] => {
      let filteredPosts = posts;

      if (searchString) {
        filteredPosts = posts.filter(
          post =>
            post.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
        );
      }
      return filteredPosts;
    };

    const filteredPosts = filterPostsByTitle(posts, searchString);
    setFilteredPosts(filteredPosts);
  }, [searchString]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  return (
    <Layout>
      <h1 data-testid="page-title">Blog</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="Post__List">
        {filteredPosts.map(
          (post: Post): JSX.Element => (
            <PostItem key={post.id} post={post} />
          )
        )}
      </div>
    </Layout>
  );
};

Blog.getInitialProps = async () => {
  const posts: Post[] = await fetchPosts();
  console.log(posts);
  return { posts };
};

export default Blog;
