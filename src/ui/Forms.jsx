import { Form, redirect, useActionData } from "react-router-dom";
import { isValidPhone } from "../utils/helpers";
import { createOrder } from "../services/apiOrder";
import store from "../store";
import { clearCart } from "../features/cart/cartSlice";

const Forms = ({ order, value, address }) => {
  const disable = value === "collect";
  const formErrors = useActionData();
  const showAddress = value === "delivery" ? address : "";
  console.log(formErrors);

  return (
    <Form method="POST" action="/checkout">
      <div className="space-y-4">
        <div className="space-y-1">
          <label className="capitalize text-brownish-2 font-medium md:text-lg">
            First Name
          </label>
          <input
            type="text"
            name="name"
            className="py-2 px-4 bg-transparent w-full rounded-sm border border-brownish-1 focus:border-brownish-2"
            required
          />
        </div>
        <div className="space-y-1">
          <label className="capitalize text-brownish-2 font-medium md:text-lg">
            Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            className={`${
              disable ? "cursor-not-allowed" : " "
            } py-2 px-4 bg-transparent w-full rounded-sm border border-brownish-1 focus:border-brownish-2`}
            disabled={disable}
            required
          />
        </div>
        <div className="space-y-1">
          <label className="capitalize text-brownish-2 font-medium md:text-lg">
            Street Address
          </label>
          <input
            name="address"
            type="text"
            className={`${
              disable ? "cursor-not-allowed" : " "
            } py-2 px-4 bg-transparent w-full rounded-sm border border-brownish-1 focus:border-brownish-2`}
            disabled={disable}
            defaultValue={showAddress}
            required
          />
        </div>
      </div>
      <div>
        <input type="hidden" name="cart" value={JSON.stringify(order)} />
        <button className="mt-8 w-full text-base font-medium rounded-sm uppercase py-2 px-4  bg-brownish-1 text-white hover:border-brownish-2 transition-all duration-160">
          Place your order
        </button>
      </div>
    </Form>
  );
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const { cart, orderPrice, deliverySum: deliveryCost } = JSON.parse(data.cart);
  const { name, phone, address } = data;

  // cart,
  const order = {
    name,
    phone,
    address,
    cart,
    orderPrice,
    deliveryCost,
  };

  console.log(order);

  const errors = {};
  if (data.phone && !isValidPhone(order.phone))
    errors.phone =
      "Please give us your correct phone number. We might need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);
  const { id } = newOrder[0];
  console.log(id);

  store.dispatch(clearCart());

  return redirect(`/order/${id}`);
};

export default Forms;
