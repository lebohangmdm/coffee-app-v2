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
        <label className="text-base sm:text-lg md:text-xl font-serif font-medium text-brownish-1">
          Quantity
        </label>
        <input
          type="number"
          className="w-8 p-1 sm:w-10 md:w-12  md:text-lg  text-brownish-2 lg:p-1.5  bg-transparent text-center"
          value={amount}
          min={1}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {buttonType === "update" ? (
        <CartButton onClick={handleSubmit} />
      ) : (
        <Btn type={"medium"} onClick={handleSubmit}>
          Add to Cart
        </Btn>
      )}
    </form>
  );
};

export default NumberInput;
