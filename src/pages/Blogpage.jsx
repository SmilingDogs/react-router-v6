import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export const Blogpage = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("post") || "";

  const handleSearch = (e) => {
    const searchQuery = e.target.value;

    if (searchQuery) {
      setSearchParams({ post: searchQuery });
    } else {
      setSearchParams({});
    }
  };

  const getPosts = async () => {
    const res = await fetch(POSTS_URL);
    const json = await res.json();
    return setPosts(json);
  };

  useEffect(() => {
    getPosts();
  }, []);
  //todo all actions are passed INSIDE a callback in useEffect

  const postsList = posts?.filter((p) => p.title.includes(query))
    .map((p) => (
      <Link key={p.id} to={`/posts/${p.id}`}>
        <li>{p.title}</li>
      </Link>
    ));

  return (
    <div>
      <h1>Blog</h1>
      <label>
        Type to search:{" "}
        <input type="text" value={query} onChange={handleSearch} />
      </label>
      <div className="input-container">
        <Link to={"/posts/new"} className="add-post">
          Add new post
        </Link>
      </div>
      <ul>{postsList}</ul>
    </div>
  );
};
