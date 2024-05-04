import Table from "../ui/Table";

const Orders = () => {
  return (
    <section className="py-16">
      <div className="align-element">
        <h3 className="text-2xl font-serif text-brownish-1 font-semibold md:text-3xl lg:text-4xl mb-8  ">
          My Order
        </h3>
        <Table />
      </div>
    </section>
  );
};

export default Orders;
