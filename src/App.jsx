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
  Orders,
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
import { loader as profileLoader } from "./Pages/Profile";
import { action as updateAction } from "./Pages/Profile";
import { loader as contactLoader } from "./Pages/Contact";
import { action as contactAction } from "./Pages/Contact";
import { loader as ordersLoader } from "./Pages/Orders";
import { loader as checkoutLoader } from "./ui/Forms";
import { loader as cartLoader } from "./Pages/Cart";
import { Toaster } from "react-hot-toast";

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
        path: "menu/:id",
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
        loader: contactLoader,
        action: contactAction,
        errorElement: <SingleError />,
      },
      {
        path: "cart",
        element: <Cart />,
        loader: cartLoader,
        errorElement: <SingleError />,
      },
      {
        path: "checkout",
        element: <Checkout />,
        loader: checkoutLoader,
        action: checkoutAction,
        errorElement: <SingleError />,
      },
      {
        path: "cart/:id",
        element: <ConfigureCoffee />,
        loader: configureLoader,
        errorElement: <SingleError />,
      },
      {
        path: "orders",
        element: <Orders />,
        loader: ordersLoader,
        errorElement: <SingleError />,
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
        loader: profileLoader,
        action: updateAction,
        errorElement: <SingleError />,
      },
      {
        path: "logout",
      },
    ],
  },
  {
    path: "register",
    element: <Register />,
    action: registerAction,
    errorElement: <SingleError />,
  },
  {
    path: "login",
    element: <Login />,
    action: loginAction,
    errorElement: <SingleError />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />;
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{
          maxWidth: "1152px",
          marginInline: "auto",
          marginTop: "52px",
        }}
        toastOptions={{
          success: {
            duration: 5000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "8px 16px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </>
  );
}

export default App;
