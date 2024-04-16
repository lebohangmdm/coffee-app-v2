import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

import CartQuantityInput from "../ui/CartQuantityInput";

const Cart = () => {
  return (
    <section className="py-16">
      <div className="align-element">
        <h3 className="text-2xl font-serif text-brownish-1 font-semibold md:text-3xl lg:text-4xl mb-8  ">
          Shopping Cart
        </h3>
        <div className="grid items-start lg:grid-cols-1fr-250px gap-12 ">
          <div>
            <div>
              <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:justify-between">
                <div>
                  <p className="mb-4 font-semibold">Item</p>
                  <div className="flex gap-6">
                    <img
                      src="/latte.jpg"
                      alt="latte"
                      className="w-[200px] h-[200px]"
                    />
                    <p className="text-lg font-serif md:text-2xl lg:text-3xl">
                      Latte Expresso
                    </p>
                  </div>
                </div>
                <div className="flex  gap-8 justify-between">
                  <div className="flex flex-col items-center space-y-2 ">
                    <p className="mb-4 font-bold">Price</p>
                    <p className=" text-center font-semibold">R700</p>
                  </div>
                  <div className="space-y-2">
                    <p className="mb-4 font-bold">Qty</p>
                    <CartQuantityInput />
                  </div>
                  <div className=" flex flex-col items-center space-y-2 ">
                    <p className="mb-4 font-bold">SubTotal</p>
                    <p className=" text-center">R1400</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <IconButton aria-label="edit" className="text-amber-900">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" className="text-brownish-2">
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
          </div>
          <div className=" bg-light-brown-1 py-6 px-6 text-brownish-2 ">
            <div className="flex flex-col space-y-3 divide-y divide-brownish-2">
              <div className="flex justify-between py-1">
                <p className="font-semibold">Subtotal</p>
                <p className="font-bold">R1400</p>
              </div>
              <div className="flex justify-between py-1">
                <p className="font-semibold">Tax</p>
                <p className="font-bold">R180</p>
              </div>
              <div className="flex justify-between py-1">
                <p className="font-semibold">Order Total</p>
                <p className="font-bold text-lg">R1680</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
