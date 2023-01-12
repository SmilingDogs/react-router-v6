// import { useState, useEffect } from "react";
import {
  useParams,
  Link,
  useNavigate,
  useLoaderData,
  useLocation,
} from "react-router-dom";
const POST_URL = `https://jsonplaceholder.typicode.com/posts/`;

export const SinglePostpage = () => {
  // const [post, setPost] = useState(null);
  const { post, id } = useLoaderData(); //*useLoaderData() equals to what is returned from loader function
  const { state } = useLocation();
  const navigate = useNavigate();
  // const { id } = useParams();

  const goBack = () => navigate(-1);

  // const getPost = async () => {

  //   return setPost(json);
  // };

  // useEffect(() => {
  //   getPost();
  // }, [id]);
  //todo all actions are passed INSIDE a callback in useEffect

  return (
    <div>
      <h1>Post # {id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to={`/posts/${id}/edit`}>Edit this post</Link>
      <div>
        <button onClick={goBack}>Go back</button>
      </div>
    </div>
  );
};

export const postLoader = async ({ params }) => {
  const id = params.id;
  const res = await fetch(POST_URL + id);
  const post = await res.json();
  return { post, id };
};
