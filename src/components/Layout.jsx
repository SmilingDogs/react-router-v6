import { NavLink, Outlet } from "react-router-dom";
import { CustomLink } from "./CustomLink";

const setActive = ({isActive}) => isActive ? 'active-link' : '';
//* we can now pass callback functions into props (here into className)

export const Layout = () => {
  return (
    <>
    <header>
      {/* <NavLink to="/" className={setActive}>Home</NavLink>
      <NavLink to="/blog" className={setActive}>Blog</NavLink>
      <NavLink to="/about" className={setActive}>About</NavLink> */}
      <CustomLink to="/" style={({isActive}) =>({color: isActive ? 'var(--color-active' : 'white'})}>Home</CustomLink>
      <CustomLink to="/posts" style={({isActive}) =>({color: isActive ? 'var(--color-active' : 'white'})}>Blog</CustomLink>
      <CustomLink to="/about" style={({isActive}) =>({color: isActive ? 'var(--color-active' : 'white'})}>About</CustomLink>
      <CustomLink to="/login" style={({isActive}) =>({color: isActive ? 'var(--color-active' : 'white'})}>Login</CustomLink>
    </header>
    <main className="container"><Outlet /></main>
    <footer className="container">Here's footer 2022 (c)</footer>
    </>
  );
};
