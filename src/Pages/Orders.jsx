import { redirect, useLoaderData } from "react-router-dom";
import { getOrders } from "../services/apiOrder";
import Table from "../ui/Table";

import { getCurrentUser } from "../services/apiAuth";

const Orders = () => {
  const { orders, user } = useLoaderData();

  return (
    <section className="py-16 bg-whitesmoke">
      <div className="align-element">
        <h3 className="text-2xl font-serif text-brownish-1 font-semibold md:text-3xl lg:text-4xl mb-8  ">
          My Order
        </h3>
        <div className="space-y-6 md:space-y-8">
          <Table data={orders} user={user} />
        </div>
      </div>
    </section>
  );
};

export const loader = async () => {
  const orders = await getOrders();
  const user = await getCurrentUser();

  if (!user) return redirect("/login");

  return { orders, user };
};

export default Orders;
