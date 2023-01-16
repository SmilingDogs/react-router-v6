import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const CreatePostPage = () => {
  const {signout} = useAuth();
  const navigate = useNavigate();
  
  return (
    <>
    <h2> Create new post (Protected Route)</h2>
    <button onClick={() => signout(() => navigate('/', {replace: true}))}>Log out</button>
    </>
  )
}
