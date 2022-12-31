import { useAuth } from "../hooks/useAuth";

export const AdminPage = () => {
  const {onLogout} = useAuth();

  return (
    <div>
      <h1>This is Admins page (Protected Route)</h1>
      <div>
        <button onClick={onLogout}>Admin Log Out</button>
      </div>
    </div>
  );
};
