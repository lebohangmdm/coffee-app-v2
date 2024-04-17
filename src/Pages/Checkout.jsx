import React from "react";
import RadioInput from "../ui/RadioInput";
import Form from "../ui/Form";

const Checkout = () => {
  return (
    <section className="py-16">
      <div className="align-element">
        <h3 className="text-2xl font-serif text-brownish-1 font-semibold md:text-3xl lg:text-4xl mb-8  ">
          Place your Order
        </h3>
        <div className="grid  items-start lg:grid-cols-1fr-400px gap-12 lg:gap-16">
          <div>
            <Form />
          </div>
          <div className="py-6 px-8 bg-gray-300 text-brownish-2 ">
            <p className="text-xl font-semibold mb-4">Order Summary</p>
            <RadioInput />
            <div className="space-y-2 divide-y divide-gray-600">
              <div className="flex justify-between">
                <p className="text-sm font-semibold py-1">Subtotal</p>
                <p className="font-bold">R1000</p>
              </div>
              <div className="flex justify-between py-1">
                <p className="text-sm font-semibold">Delivery Fee</p>
                <p className="font-bold">R35</p>
              </div>
              <div className="flex justify-between py-4">
                <p className="font-semibold">Order Total</p>
                <p className="font-bold">R1035</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
