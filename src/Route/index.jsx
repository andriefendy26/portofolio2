import About from "../Layout/About";
import Home from "../Layout/HomeRoute";
import { createBrowserRouter } from "react-router-dom";
import Project from "../Layout/Project";
import Contact from "../Layout/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Project",
    element: <Project />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);

export default router;
