import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export const SinglePostpage = () => {
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const POST_URL = `https://jsonplaceholder.typicode.com/posts/${id}`;

  const goBack = () => navigate(-1);

  const getPost = async () => {
    const res = await fetch(POST_URL);
    const json = await res.json();
    return setPost(json);
  };

  useEffect(() => {
    getPost();
  }, [id]);
  //todo all actions are passed INSIDE a callback in useEffect

  return (
    <div>
      {post && (
        <>
          <h1>Post # {id}</h1>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`}>Edit this post</Link>
          <div>
            <button onClick={goBack}>Go back</button>
          </div>
        </>
      )}
    </div>
  );
};
