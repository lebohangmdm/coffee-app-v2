import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Contact, Home, Login, Menu, Register } from "./Pages";

import AppLayout from "./ui/AppLayout";
import { loader as featuredLoader } from "./Pages/Home";

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
