import { Button } from "@mui/material";

const NumberInput = ({ amount, setAmount, onAddItem }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    onAddItem();
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
          className="w-14 text-xl text-brownish-2 p-2 bg-transparent"
          value={amount}
          min={1}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <Button
        type="submit"
        variant="contained"
        className="text-base rounded-md font-medium  capitalize py-1 px-4  bg-brownish-1 text-white hover:border-brownish-2 transition-all duration-160"
        onClick={handleSubmit}
      >
        Add to Cart
      </Button>
    </form>
  );
};

export default NumberInput;
