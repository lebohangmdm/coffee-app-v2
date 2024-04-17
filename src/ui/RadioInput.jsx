import React from "react";

const RadioInput = () => {
  return (
    <div className="mb-8 bg-transparent  ">
      <p className="text-sm text-brownish-2 font-medium uppercase mb-2">
        Wait for delivery or collect your self
      </p>
      <div class="space-y-2">
        <label class="flex items-center">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-brownish-1 bg-red-400"
            name="delivery-option"
            value="delivery"
          />
          <span className="ml-2 text-brownish-2">Delivery</span>
        </label>

        <label class="flex items-center">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-brownish-1"
            name="delivery-option"
            value="collect"
          />
          <span className="ml-2 text-brownish-2">Collect</span>
        </label>
      </div>
    </div>
  );
};

export default RadioInput;
