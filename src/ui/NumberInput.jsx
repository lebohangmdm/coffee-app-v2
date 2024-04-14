import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const NumberInput = () => {
  return (
    <form className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between">
      <div className="space-x-8">
        <label className="text-xl font-serif font-medium text-brownish-1">
          Quantity
        </label>
        <input
          type="number"
          className="w-14 text-xl text-brownish-2 p-2 bg-transparent"
          defaultValue={1}
          min={1}
        />
      </div>
      <Button
        type="submit"
        variant="contained"
        className="text-base rounded-md font-medium  capitalize py-1 px-4  bg-brownish-1 text-white hover:border-brownish-2 transition-all duration-160"
      >
        Add to Cart
      </Button>
    </form>
  );
};

export default NumberInput;
