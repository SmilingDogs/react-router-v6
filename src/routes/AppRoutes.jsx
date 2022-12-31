import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { HomePage } from "../pages/Homepage";
import { AboutPage } from "../pages/Aboutpage";
import { Blogpage } from "../pages/Blogpage";
import { SinglePostpage } from "../pages/SinglePostpage";
import { EditPostPage } from "../pages/EditPostpage";
import { CreatePostPage } from "../pages/CreatePostpage";
import { NotfoundPage } from "../pages/NotfoundPage";
import { Loginpage } from "../pages/Loginpage";
import ProtectedRoute from "../hoc/ProtectedRoute";
import AuthProvider from "../hoc/AuthProvider";
import { AdminPage } from "../pages/Adminpage";

export const AppRoutes = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="posts" element={<Blogpage />} />
            <Route path="posts/:id" element={<SinglePostpage />} />
            <Route path="posts/:id/edit" element={<EditPostPage />} />
            <Route
              path="posts/new"
              element={
                <ProtectedRoute>
                  <CreatePostPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="admin"
              element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<Loginpage />} />
            <Route path="*" element={<NotfoundPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
};
