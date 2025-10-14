import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import PostDetails from "./pages/PostDetails";
import Profile from "./components/Profile";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <Login></Login> },
        { path: "/register", element: <Register></Register> },
        {
          path: "/home",
          element: (
            <ProtectedRoute>
              <Home></Home>
            </ProtectedRoute>
          ),
        },
        {
          path: "/posts/:id",
          element: (
            <ProtectedRoute>
              <PostDetails></PostDetails>
            </ProtectedRoute>
          ),
        },
        {
          path: "/profile/:id",
          element: (
            <ProtectedRoute>
              <Profile></Profile>
            </ProtectedRoute>
          ),
        },
        { path: "*", element: <h2>Not found</h2> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
