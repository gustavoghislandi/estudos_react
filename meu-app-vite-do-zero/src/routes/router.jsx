import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      return res.json();
    },
  },
]);
