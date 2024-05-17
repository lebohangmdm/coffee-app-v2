import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import Header from "./Header/Header";
import Loader from "./Loader";
import { getCurrentUser } from "../services/apiAuth";

const AppLayout = () => {
  const data = useLoaderData();
  const user = data?.user_metadata;
  const isAuthenticated = data?.role === "authenticated";

  const navigation = useNavigation();
  const loading = navigation.state === "loading";

  return (
    <>
      {loading && <Loader />}
      <Header user={user} auth={isAuthenticated} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export const loader = async () => {
  const data = await getCurrentUser();
  return data;
};

export default AppLayout;
