import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const CreatePostPage = () => {
  const {onLogout, token} = useAuth();
  
  return (
    <>
    <h2>Create new post (Protected Route)</h2>
    {token && <button onClick={onLogout}>Log out</button>}
    </>
  )
}
