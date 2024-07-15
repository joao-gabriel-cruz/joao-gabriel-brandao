import { createBrowserRouter } from "react-router-dom";
import { Home } from "../page/home";
import { Project } from "../page/project";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/project",
    element: <Project />,
  }
]);