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
  const [sortBy, setSortBy] = useState("desc");

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

    const getTime = (dateString: string) => {
      if (!dateString) {
        return 0;
      }
      const date = new Date(dateString);
      return date != null ? date.getTime() : 0;
    };

    const sortPostsByDate = (posts: Post[], sortBy: string): Post[] => {
      let sortedPosts = posts.filter(post => post.date);
      if (sortBy === "desc") {
        sortedPosts = sortedPosts.sort(
          (post1, post2) => getTime(post2.date) - getTime(post1.date)
        );
      } else {
        sortedPosts = sortedPosts.sort(
          (post1, post2) => getTime(post1.date) - getTime(post2.date)
        );
      }
      return sortedPosts;
    };

    const filteredPosts = filterPostsByTitle(posts, searchString);
    const sortedPosts = sortPostsByDate(filteredPosts, sortBy);
    const nondatedPosts = filteredPosts.filter(post => !post.date);
    setFilteredPosts([...sortedPosts, ...nondatedPosts]);
  }, [searchString, sortBy]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("event.target.value:", event.target.value);
    setSortBy(event.target.value);
  };

  return (
    <Layout>
      <h1 data-testid="page-title">Blog</h1>
      <SearchBar onSearch={handleSearch} onSort={handleSort} />
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
