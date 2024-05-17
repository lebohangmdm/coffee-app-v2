import { useLoaderData } from "react-router-dom";
import { getOrder } from "../services/apiOrder";
import { formatDate } from "../utils/helpers";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";

const Order = () => {
  const data = useLoaderData();
  console.log(data);
  const totalPrice = data.orderPrice - data.deliveryCost;
  const delivery = data.deliveryCost > 0;
  console.log(data.orderTime);
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-brownish-2 bg-gray-200 p-4 md:p-6 ">
          <h2 className="mb-8 md:mb-12 text-xl md:text-2xl font-semibold">
            Order: {data.orderNumber}
          </h2>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex  justify-between">
                <div className="flex flex-col sm:flex-row sm:gap-2 sm:items-center">
                  <span>
                    <AccessAlarmsIcon />
                  </span>
                  <p className="text-sm capitalize max-w-44 sm:text-base sm:max-w-full md:text-lg">
                    {delivery
                      ? "Delivery will take to 15-30 minutes"
                      : "Order will be between after 5-15 minutes"}
                  </p>
                </div>
                <p className="text-sm flex items-center md:text-lg">
                  {formatDate(data.orderTime)}
                </p>
              </div>
            </div>

            <div>
              {data.cart.map((item) => {
                return (
                  <div
                    key={item.name}
                    className="flex justify-between items-center space-y-2"
                  >
                    <p className="capitalize font-serif max-w-52 sm:max-w-full  sm:text-lg  text-brownish-1">
                      <span>{item.quantity} X</span> {item.name}
                    </p>
                    <p className=" md:text-lg  font-semibold">
                      R{item.totalPrice}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="space-y-1 ">
              <div className="flex items-center justify-between">
                <p>
                  Price Coffee:{" "}
                  <span className="font-medium">R{totalPrice}</span>
                </p>

                {delivery && (
                  <p>
                    Delivery Cost:{" "}
                    <span className="font-medium">R{data.deliveryCost} </span>
                  </p>
                )}
              </div>
              <p className="text-lg uppercase">
                Total Cost :{" "}
                <span className="font-bold ">R{data.orderPrice}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const loader = async ({ params }) => {
  const { id } = params;
  const order = await getOrder(id);

  return order;
};

export default Order;
