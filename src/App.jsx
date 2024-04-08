import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Contact, Home, Login, Menu, Register } from "./Pages";

import AppLayout from "./ui/AppLayout";
import { loader as featuredLoader } from "./Pages/Home";
import { loader as menuLoader } from "./Pages/Menu";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: featuredLoader,
      },
      {
        path: "menu",
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
