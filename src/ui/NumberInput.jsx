import { Button } from "@mui/material";
import CartButton from "./CartButton";
import Btn from "./Btn";

const NumberInput = ({ amount, setAmount, onHandle, buttonType }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    onHandle();
  };

  return (
    <form
      className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between"
      onSubmit={handleSubmit}
    >
      <div className="space-x-8">
        <label className="text-xl font-serif font-medium text-brownish-1">
          Quantity
        </label>
        <input
          type="number"
          className="w-14 text-xl text-brownish-2 p-2 bg-transparent text-center"
          value={amount}
          min={1}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {buttonType === "update" ? (
        <CartButton />
      ) : (
        <Btn type={"medium"} onClick={handleSubmit}>
          Add to Cart
        </Btn>
      )}
    </form>
  );
};

export default NumberInput;
