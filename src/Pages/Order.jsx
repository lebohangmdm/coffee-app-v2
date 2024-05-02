import { useActionData, useLoaderData, useParams } from "react-router-dom";
import { getOrder } from "../services/apiOrder";
import { formatDate, orderNum } from "../utils/helpers";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";

const Order = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const orderNumber = orderNum(data.orderNumber);
  const totalPrice = data.orderPrice - data.deliveryCost;
  return (
    <section className="py-16 bg-white">
      <div className="align-element">
        <div className="max-w-5xl mx-auto text-brownish-2 ">
          <h2 className="mb-8">Order: {orderNumber} </h2>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex  justify-between">
                <div className="flex flex-col sm:gap-1 md:flex-row md:gap-2 md:items-center">
                  <span>
                    <AccessAlarmsIcon />
                  </span>
                  <p className="text-sm capitalize max-w-44 sm:text-base sm:max-w-full md:text-lg">
                    Delivery will take to 15-30 minutes
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
                    className="flex justify-between items-center"
                  >
                    <p className="text-sm capitalize font-serif sm:text-base md:text-lg text-brownish-1">
                      <span>{item.quantity} X</span> {item.name}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg  font-semibold">
                      R{item.totalPrice}
                    </p>
                  </div>
                );
              })}
            </div>

            <div>
              <p>Price Coffee: {totalPrice}</p>
              <p>Delivery Cost: {data.deliveryCost} </p>
              <p>Total Cost : {data.orderPrice} </p>
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
