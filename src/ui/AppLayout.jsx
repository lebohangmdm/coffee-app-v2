import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header/Header";
import Loader from "./Loader";

const AppLayout = () => {
  const navigation = useNavigation();

  const loading = navigation.state === "loading";

  return (
    <>
      {loading && <Loader />}
      <Header />
      <main className="bg-whitesmoke">
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
