import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <p>
      This page does not exist. Go <Link to="/">Home</Link>
    </p>
  );
};
