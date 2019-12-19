import axios from "axios";

export const fetchPosts = async () => {
  try {
    const { data: posts } = await axios.get(
      "https://upply-interview.herokuapp.com"
    );

    return posts;
  } catch (error) {
    throw new Error(error.message);
  }
};
