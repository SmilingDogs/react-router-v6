import { Routes, Route, Link } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AboutPage } from "./pages/AboutPage";
import { Blogpage } from "./pages/Blogpage";
import { HomePage } from "./pages/Homepage";
import { NotfoundPage } from "./pages/NotFoundpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog" element={<Blogpage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
