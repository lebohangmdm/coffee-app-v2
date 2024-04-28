import { Form, useActionData } from "react-router-dom";
import { isValidPhone } from "../utils/helpers";

const Forms = ({ order, value }) => {
  const disable = value === "collect";
  const formErrors = useActionData();
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
            className="py-2 px-4 bg-transparent w-full rounded-sm border border-brownish-1 focus:border-brownish-2 "
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
            className="py-2 px-4 bg-transparent w-full rounded-sm border border-brownish-1 focus:border-brownish-2 "
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
            className="py-2 px-4 bg-transparent w-full rounded-sm border border-brownish-1 focus:border-brownish-2"
            disabled={disable}
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

  const order = {
    ...data,
    cart: data.cart,
    orderPrice: data.orderPrice,
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your correct phone number. We might need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  // console.log(newOrder);

  return null;
};

export default Forms;
