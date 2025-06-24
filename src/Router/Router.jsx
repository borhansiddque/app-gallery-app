import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AppDetails from "../Pages/AppDetails";
import UserProfile from "../Pages/UserProfile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Loading from "../Components/Loading/Loading";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import EditProfile from "../Pages/EditProfile";
import ExclusiveContent from "../Pages/ExclusiveContent";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayouts,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/apps.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/app-details/:id",
        element: (
          <PrivateRoute>
            <AppDetails></AppDetails>{" "}
          </PrivateRoute>
        ),
        loader: () => fetch("/apps.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/exclusive-content",
        element: <PrivateRoute><ExclusiveContent></ExclusiveContent></PrivateRoute>
      },
      {
        path: "/my-profile",
        Component: UserProfile,
      },
      {
        path: "/my-profile/edit-profile",
        Component: EditProfile,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

export default router;
