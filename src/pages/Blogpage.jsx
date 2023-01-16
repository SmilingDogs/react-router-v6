// import { useState, useEffect } from "react";
import { Suspense } from "react";
import {
  Link,
  useLoaderData,
  useSearchParams,
  defer,
  Await,
} from "react-router-dom";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export const BlogPage = () => {
  // const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { posts } = useLoaderData();
  const query = searchParams.get("post") || "";

  const handleSearch = (e) => {
    const searchQuery = e.target.value;

    if (searchQuery) {
      setSearchParams({ post: searchQuery });
    } else {
      setSearchParams({});
    }
  };

  // const getPosts = async () => {

  // return setPosts(json);
  // };

  // useEffect(() => {
  //   getPosts();
  // }, []);
  //todo all actions are passed INSIDE a callback in useEffect

  return (
    <div>
      <h1>Blogers</h1>
      <label>
        Type to search:{" "}
        <input type="text" value={query} onChange={handleSearch} />
      </label>
      <div className="input-container">
        <Link to={"/posts/new"} className="add-post">
          Add new post
        </Link>
      </div>
      <Suspense fallback={<h2 style={{ color: "red" }}>Loading posts...</h2>}>
        <Await resolve={posts}>
          {(resolvedPosts) => (
            <ul>
              { resolvedPosts?.filter((p) => p.title.includes(query))
                .map((p) => (
                  <Link key={p.id} to={`/posts/${p.id}`}>
                    <li>{p.title}</li>
                  </Link>
                ))
              }
            </ul>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

const getPosts = async () => {
  const res = await fetch(POSTS_URL);
  const json = await res.json();
  return json;
};

export const blogLoader = async () => {
  return defer({
    posts: getPosts(),
  });
};
