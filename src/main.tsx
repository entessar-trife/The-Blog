import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Blog from "./pages/Blog.tsx";
import Projects from "./pages/Projects.tsx";
import About from "./pages/About.tsx";
import Newsletter from "./pages/Newsletter.tsx";
import { Provider } from "react-redux";
import store from "./redux/store/index.ts";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "blog/:id",
        element: <Blog />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
