import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

import CartQuantityInput from "../ui/CartQuantityInput";
import { useDispatch, useSelector } from "react-redux";
import { getCart, getTotalPrice, removeItem } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import EmptyCart from "../ui/EmptyCart";
import { toast } from "react-hot-toast";
import Btn from "../ui/Btn";

const Cart = () => {
  const cart = useSelector(getCart);
  const totalPrice = useSelector(getTotalPrice);

  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  const handleDelete = (coffee) => {
    dispatch(removeItem(coffee.id));
    toast.success(`You have removed ${coffee.name} from the cart`, {
      style: {
        fontSize: "14px",
        color: "red",
        textTransform: "capitalize",
      },
      iconTheme: {
        primary: "red", // Icon color
        secondary: "white", // Icon background color
      },
    });
  };

  return (
    <section className="py-16 bg-light-brown-5">
      <div className="align-element">
        <h3 className="text-2xl  font-serif text-brownish-1 font-semibold md:text-3xl lg:text-4xl mb-8  ">
          Shopping Cart
        </h3>
        <div className="grid items-start lg:grid-cols-1fr-350px gap-12 ">
          <div className="space-y-8 divide-y divide-amber-950">
            {cart.map((coffee) => {
              return (
                <div key={coffee.id} className="pt-4">
                  <div className="flex flex-col space-y-4  md:flex-row md:space-y-0 md:justify-between">
                    <div>
                      <p className="mb-4 font-semibold">Item</p>
                      <div className="flex gap-6">
                        <img
                          src={coffee.image}
                          alt={coffee.name}
                          className="w-[150px] h-[150px]"
                        />
                        <p className="text-lg font-serif md:text-xl lg:text-3xl max-w-64">
                          {coffee.name}
                        </p>
                      </div>
                    </div>
                    <div className="flex  gap-8 justify-between">
                      <div className="flex flex-col items-center space-y-2 ">
                        <p className="mb-4 font-bold">Price</p>
                        <p className=" text-center font-semibold">
                          R{coffee.unitPrice}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="mb-4 font-bold">Qty</p>
                        <CartQuantityInput
                          count={coffee.quantity}
                          id={coffee.id}
                          name={coffee.name}
                        />
                      </div>
                      <div className=" flex flex-col items-center space-y-2 ">
                        <p className="mb-4 font-bold">SubTotal</p>
                        <p className=" text-center font-bold">
                          R{coffee.totalPrice}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <>
                      <Link to={`/cart/${coffee.id}`}>
                        <IconButton
                          aria-label="edit"
                          className="text-amber-900"
                        >
                          <EditIcon />
                        </IconButton>
                      </Link>
                    </>
                    <IconButton
                      aria-label="delete"
                      className="text-brownish-2"
                      onClick={() => handleDelete(coffee)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" bg-gray-300 py-6 px-6  ">
            <p className="text-xl mb-4">Summary</p>

            <div className="flex flex-col space-y-1 divide-y divide-brownish-2">
              <div className="flex justify-between py-1">
                <p className="text-sm font-semibold">Subtotal</p>
                <p className="font-bold">R{totalPrice}</p>
              </div>

              <div className="flex justify-between py-1">
                <p className="font-semibold">Order Total</p>
                <p className="font-bold text-lg text-brownish-2">
                  R{totalPrice}
                </p>
              </div>
            </div>
            <div className="mt-6">
              <Btn to={"/checkout"} type={"full"}>
                proceed to order
              </Btn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
