import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const CreatePostPage = () => {
  const {onLogout, user} = useAuth();
  const navigate = useNavigate();

  return (
    <>
    <h2>Create new post </h2>
    {user && <button onClick={() => onLogout(() => navigate('/', {replace: true}))}>Log out</button>}
    </>
  )
}
