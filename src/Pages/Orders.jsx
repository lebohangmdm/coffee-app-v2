import { useLoaderData } from "react-router-dom";
import { getOrders } from "../services/apiOrder";
import Table from "../ui/Table";
import Pagination from "../ui/Pagination";
import { useState } from "react";

const Orders = () => {
  const data = useLoaderData();

  // const [currentPage, setCurrentPage] = useState(1);
  // const [ordersPerPage] = useState(10);

  // // get current recipes
  // const indexOfLastOrder = currentPage * ordersPerPage;
  // const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  // const currentOrders = data.slice(indexOfFirstOrder, indexOfLastOrder);

  // const handlePaginate = (pageNumber) => {
  //   return setCurrentPage(pageNumber);
  // };

  return (
    <section className="py-16">
      <div className="align-element">
        <h3 className="text-2xl font-serif text-brownish-1 font-semibold md:text-3xl lg:text-4xl mb-8  ">
          My Order
        </h3>
        <div className="space-y-6 md:space-y-8">
          <Table data={data} />
        </div>
      </div>
    </section>
  );
};

export const loader = async () => {
  const data = await getOrders();

  return data;
};

export default Orders;
