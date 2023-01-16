import {
    Route,
    createBrowserRouter,
    createRoutesFromElements, Navigate
} from "react-router-dom";
import { Layout } from './components/Layout';
import { HomePage } from './pages/Homepage';
import { AboutPage } from './pages/Aboutpage';
import { BlogPage, blogLoader } from './pages/Blogpage'
import { postLoader, SinglePostpage } from "./pages/SinglePostpage";
import { EditPostPage } from "./pages/EditPostpage";
import ProtectedRoute from "./hoc/ProtectedRoute";
import { CreatePostPage } from "./pages/CreatePostPage";
import { NotFoundPage } from "./pages/NotFoundpage";
import { LoginPage } from "./pages/LoginPage";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about/*" element={<AboutPage />} />
      <Route path="about-us" element={<Navigate to="/about" replace />} />
      <Route path="posts" element={<BlogPage />} loader={blogLoader} />
      <Route path="posts/:id" element={<SinglePostpage />} loader={postLoader} />
      <Route path="posts/:id/edit" element={<EditPostPage />} loader={postLoader} />
      <Route path="posts/new" element={
        <ProtectedRoute>
          <CreatePostPage />
        </ProtectedRoute>
      } />
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  ))
  
  export default router