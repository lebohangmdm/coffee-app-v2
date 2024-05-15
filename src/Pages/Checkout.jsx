import React, { useEffect, useState } from "react";
import RadioInput from "../ui/RadioInput";
import Forms from "../ui/Forms";
import { useSelector } from "react-redux";
import { getCart, getTotalPrice } from "../features/cart/cartSlice";

import { getAddress, getPosition } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [address, setAddress] = useState("");
  const [value, setValue] = useState("collect");
  const totalPrice = useSelector(getTotalPrice);
  const cart = useSelector(getCart);
  const deliverySum = value === "delivery" ? 35 : 0;
  const orderPrice = totalPrice + deliverySum;
  const navigate = useNavigate();

  useEffect(() => {
    const getFullAddress = async () => {
      const { latitude, longitude } = await getPosition();

      const address = await getAddress({ latitude, longitude });
      setAddress(address);
    };
    getFullAddress();
  }, []);

  if (totalPrice === 0) return navigate("/cart");

  const order = {
    cart,
    orderPrice,
    deliverySum,
  };

  return (
    <section className="py-16 bg-light-brown-5">
      <div className="align-element">
        <h3 className="text-2xl font-serif text-brownish-1 font-semibold md:text-3xl lg:text-4xl mb-8  ">
          Place your Order
        </h3>
        <div className="grid  items-start lg:grid-cols-1fr-400px gap-12 lg:gap-16">
          <div>
            <Forms order={order} address={address} value={value} />
          </div>
          <div className="py-6 px-8 bg-gray-300 text-brownish-2 ">
            <p className="text-xl font-semibold mb-4">Order Summary</p>
            <RadioInput value={value} setValue={setValue} />

            <div className="space-y-2 divide-y divide-gray-600">
              <div className="flex justify-between">
                <p className="text-sm font-semibold py-1">Subtotal</p>
                <p className="font-bold">R{totalPrice}</p>
              </div>
              {deliverySum > 0 && (
                <div className="flex justify-between py-1">
                  <p className="text-sm font-semibold">Delivery Fee</p>
                  <p className="font-bold">R{deliverySum}</p>
                </div>
              )}
              <div className="flex justify-between py-4">
                <p className="font-semibold">Order Total</p>
                <p className="font-bold">R{orderPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
