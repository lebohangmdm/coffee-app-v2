import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Contact, Home, Login, Menu, Register } from "./Pages";

import AppLayout from "./ui/AppLayout";
import { loader as featuredLoader } from "./Pages/Home";
import { loader as menuLoader } from "./Pages/Menu";
import CoffeeDetail, { loader as coffeeLoader } from "./Pages/CoffeeDetail";
import Cart from "./Pages/Cart";

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
        path: "/menu/:id",
        element: <CoffeeDetail />,
        loader: coffeeLoader,
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
        path: "cart",
        element: <Cart />,
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
