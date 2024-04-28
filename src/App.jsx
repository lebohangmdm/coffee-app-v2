import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Home,
  Login,
  Menu,
  Register,
  ConfigureCoffee,
} from "./Pages";

import AppLayout from "./ui/AppLayout";
import { loader as featuredLoader } from "./Pages/Home";
import { loader as menuLoader } from "./Pages/Menu";
import CoffeeDetail, { loader as coffeeLoader } from "./Pages/CoffeeDetail";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import { loader as configureLoader } from "./Pages/ConfigureCoffee";
import { action as checkoutAction } from "./ui/Forms";
import { action as loginAction } from "./Pages/Login";
import { action as registerAction } from "./Pages/Register";

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
        path: "/:id",
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
        path: "/checkout",
        element: <Checkout />,
        action: checkoutAction,
      },
      {
        path: "cart/:id",
        element: <ConfigureCoffee />,
        loader: configureLoader,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
