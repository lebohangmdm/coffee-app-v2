import React from "react";

const FormRow = ({ label, type, name, disable, defaultValue, error }) => {
  const style = `${
    disable ? "cursor-not-allowed " : ""
  } py-1  px-4 text-sm bg-transparent w-full rounded-sm border border-brownish-1 focus:border-brownish-2"`;
  return (
    <div className="space-y-1">
      <label className="capitalize text-brownish-2 font-medium text-sm curs">
        {label}
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={style}
        required
        disabled={disable}
      />
      <p className="mt-2 text-sm">{error}</p>
    </div>
  );
};

export default FormRow;
