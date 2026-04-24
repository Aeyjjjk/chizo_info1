import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);