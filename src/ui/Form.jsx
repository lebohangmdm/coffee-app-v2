import { Box, Button, TextField } from "@mui/material";
import React from "react";

const Form = () => {
  return (
    <form action="">
      <div className="space-y-4">
        <div className="space-y-1">
          <label className="capitalize text-brownish-2 font-medium md:text-lg">
            First Name
          </label>
          <input
            type="text"
            className="py-2 px-4 bg-transparent w-full rounded-sm border border-brownish-1 focus:border-brownish-2 "
          />
        </div>
        <div className="space-y-1">
          <label className="capitalize text-brownish-2 font-medium md:text-lg">
            Street Address
          </label>
          <input
            type="text"
            className="py-2 px-4 bg-transparent w-full rounded-sm border border-brownish-1 focus:border-brownish-2 "
          />
        </div>
      </div>

      <button className="mt-8 w-full text-base font-medium rounded-sm uppercase py-2 px-4  bg-brownish-1 text-white hover:border-brownish-2 transition-all duration-160">
        Place your order
      </button>
    </form>
  );
};

export default Form;
