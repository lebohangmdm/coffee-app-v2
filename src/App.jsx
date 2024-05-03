import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Home,
  Login,
  Menu,
  Register,
  ConfigureCoffee,
  Checkout,
  Error,
  SingleError,
  Order,
  Cart,
  CoffeeDetail,
  Profile,
} from "./Pages";

import AppLayout, { loader as appLoader } from "./ui/AppLayout";
import { loader as featuredLoader } from "./Pages/Home";
import { loader as menuLoader } from "./Pages/Menu";
import { loader as coffeeLoader } from "./Pages/CoffeeDetail";
import { loader as configureLoader } from "./Pages/ConfigureCoffee";
import { action as checkoutAction } from "./ui/Forms";
import { action as loginAction } from "./Pages/Login";
import { action as registerAction } from "./Pages/Register";
import { loader as orderLoader } from "./Pages/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    loader: appLoader,
    children: [
      {
        index: true,
        element: <Home />,
        loader: featuredLoader,
        errorElement: <SingleError />,
      },
      {
        path: "menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <SingleError />,
      },
      {
        path: "/:id",
        element: <CoffeeDetail />,
        loader: coffeeLoader,
        errorElement: <SingleError />,
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
        path: "checkout",
        element: <Checkout />,
        action: checkoutAction,
        errorElement: <SingleError />,
      },
      {
        path: "cart/:id",
        element: <ConfigureCoffee />,
        loader: configureLoader,
      },
      {
        path: "order/:id",
        element: <Order />,
        loader: orderLoader,
        errorElement: <SingleError />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
