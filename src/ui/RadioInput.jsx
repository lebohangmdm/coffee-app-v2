const RadioInput = ({ value, setValue }) => {
  const options = [
    { value: "collect", label: "collect" },
    { value: "delivery", label: "delivery" },
  ];

  console.log(value);

  return (
    <div className="mb-8 bg-transparent  ">
      <p className="text-sm text-brownish-2 font-medium uppercase mb-2">
        Wait for delivery or collect your self
      </p>
      <div className="space-y-2">
        {options.map((option) => {
          return (
            <div key={option.value} className="flex items-center">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-brownish-1 bg-red-400"
                name="delivery-option"
                value={option.value}
                id={option.value}
                checked={value === option.value}
                onChange={(e) => setValue(e.target.value)}
              />
              <label
                htmlFor={option.value}
                className="ml-2 text-brownish-2 capitalize "
              >
                {option.label}
              </label>
            </div>
          );
        })}
        {value === "delivery" && (
          <p className="mt-2 text-[12px]">
            <span className="font-bold mr-2">NB</span>
            Delivery is available within a 5km radius!
          </p>
        )}
      </div>
    </div>
  );
};

export default RadioInput;
