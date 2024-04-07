import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main className="bg-whitesmoke">
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
