import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export const Blogpage = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await fetch(POSTS_URL);
    const json = await res.json();
    return setPosts(json);
  };

  useEffect(() => {
    getPosts();
  }, []);
  //todo all actions are passed INSIDE a callback in useEffect

  const postsList = posts?.map((p) => (
    <Link key={p.id} to={`/posts/${p.id}`}>
      <li>{p.title}</li>
    </Link>
  ));

  return (
    <div>
      <h1>Blog</h1>
      <Link to={'/posts/new'} className='add-post'>Add new post</Link>
      <ul>{postsList}</ul>
    </div>
  );
};
