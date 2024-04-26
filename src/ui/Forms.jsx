import { Form } from "react-router-dom";

const Forms = ({ order }) => {
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
          />
        </div>
        <div className="space-y-1">
          <label className="capitalize text-brownish-2 font-medium md:text-lg">
            Street Address
          </label>
          <input
            name="address"
            type="text"
            className="py-2 px-4 bg-transparent w-full rounded-sm border border-brownish-1 focus:border-brownish-2 "
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

  const newOrder = {
    ...data,
    cart: JSON.parse(data.cart),
  };

  console.log(newOrder);

  return null;
};

export default Forms;
