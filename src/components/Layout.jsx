import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
    <header>
      <NavLink to="/" className={({isActive}) => isActive ? 'active-link' : ''}>Home</NavLink>
      <NavLink to="/blog" className={({isActive}) => isActive ? 'active-link' : ''}>Blog</NavLink>
      <NavLink to="/about" className={({isActive}) => isActive ? 'active-link' : ''}>About</NavLink>
    </header>
    <main className="container"><Outlet /></main>
    <footer className="container">Here's footer 2022 (c)</footer>
    </>
  );
};
