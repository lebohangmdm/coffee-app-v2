import { Form, redirect, useLoaderData, useNavigation } from "react-router-dom";

import { formatDate, isValidPhone, orderNum } from "../utils/helpers";
import { createOrder } from "../services/apiOrder";
import store from "../store";
import { getCurrentUser } from "../services/apiAuth";
import { clearCart } from "../features/cart/cartSlice";
// import { useDispatch } from "react-redux";

const Forms = ({ order, value, address }) => {
  const disable = value === "collect";
  const showAddress = value === "delivery" ? address : "";
  const navigation = useNavigation();
  const submitting = navigation.state === "submitting";

  const fullName = useLoaderData();

  return (
    <Form method="POST" action="/checkout">
      <div className="space-y-4">
        <div className="space-y-1">
          <label className="capitalize text-brownish-2 font-medium md:text-lg">
            full name
          </label>
          <input
            type="text"
            name="fullName"
            defaultValue={fullName}
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
        <button
          disabled={submitting}
          className="mt-8 w-full text-base font-medium rounded-sm uppercase py-2 px-4  bg-brownish-1 text-white hover:border-brownish-2 transition-all duration-160"
        >
          {submitting ? "Placing..." : "Place your order"}
        </button>
      </div>
    </Form>
  );
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const { cart, orderPrice, deliverySum: deliveryCost } = JSON.parse(data.cart);
  const { fullName, phone, address } = data;
  const user = await getCurrentUser();
  const id = user?.id;
  const place = address === undefined ? "At the Store" : address;

  const orderNumber = orderNum();
  const time = new Date();
  const orderTime = formatDate(time);

  // cart,
  const order = {
    user_id: id,
    name: fullName,
    address: place,
    phone,
    cart,
    orderPrice,
    orderNumber,
    orderTime,
    deliveryCost,
  };

  const errors = {};
  if (data.phone && !isValidPhone(order.phone))
    errors.phone =
      "Please give us your correct phone number. We might need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  console.log(errors);
  const newOrder = await createOrder(order);

  const newOrderId = newOrder[0].id;

  return redirect(`/order/${newOrderId}`);
};

export const loader = async () => {
  const data = await getCurrentUser();

  return data.user_metadata?.fullName;
};

export default Forms;
