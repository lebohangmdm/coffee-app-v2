import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <section className="py-16 height-dvh">
      <div className="align-element">
        <h3 className="text-2xl font-serif text-brownish-1 font-semibold md:text-3xl lg:text-4xl mb-8 md:mb-12  ">
          Shopping Cart
        </h3>
        <div className="space-y-2">
          <p className="text-[12px]">
            You have no items in your shopping cart.
          </p>
          <p className="text-[12px] ">
            Click{" "}
            <Link to={"/menu"} className="underline font-medium">
              here
            </Link>{" "}
            here to continue shopping.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmptyCart;
